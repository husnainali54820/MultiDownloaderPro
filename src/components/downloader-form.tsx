'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, Download, Clapperboard, Music, Image as ImageIcon } from 'lucide-react';

interface DownloadOption {
  label: string;
  url: string;
  type: string;
  quality?: string;
}

interface VideoMeta {
  title: string;
  thumbnail: string;
  options: DownloadOption[];
  duration?: string;
  source?: string;
}

function ResultSkeleton() {
  return (
    <div className="mt-8">
      <Card className="glassmorphism overflow-hidden shadow-glow">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-6 sm:flex-row">
            <Skeleton className="relative aspect-video w-full shrink-0 sm:w-64 rounded-md" />
            <div className="flex flex-1 flex-col">
              <Skeleton className="h-6 w-4/5 rounded" />
              <Skeleton className="mt-2 h-4 w-1/3 rounded" />
              <div className="mt-4 flex flex-wrap gap-2">
                <Skeleton className="h-9 w-20 rounded-md" />
                <Skeleton className="h-9 w-20 rounded-md" />
                <Skeleton className="h-9 w-20 rounded-md" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function DownloaderForm({ placeholder }: { placeholder?: string }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<VideoMeta | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a URL.',
      });
      return;
    }
    
    setLoading(true);
    setMeta(null);

    try {
      // Call our internal API route
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to fetch video details');
      }

      setMeta(result);
      
    } catch (err) {
      console.error(err);
      toast({
        variant: 'destructive',
        title: 'Extraction Failed',
        description: err instanceof Error ? err.message : 'Could not download video. Please check the link.',
      });
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    if (type === 'audio') return <Music className="mr-2 h-4 w-4" />;
    if (type === 'image') return <ImageIcon className="mr-2 h-4 w-4" />;
    return <Clapperboard className="mr-2 h-4 w-4" />;
  };

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="glassmorphism p-4 sm:p-6 shadow-glow">
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={placeholder || 'Paste video link here...'}
              disabled={loading}
              aria-label="Video URL"
              className="shadow-glow-sm"
            />
            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full text-lg sm:w-auto shadow-glow"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                <Download className="mr-2 h-5 w-5" />
                Download
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {loading && <ResultSkeleton />}

      {meta && (
        <div className="mt-8 animate-in fade-in duration-500">
          <Card className="glassmorphism overflow-hidden shadow-glow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative aspect-video w-full shrink-0 sm:w-64 bg-black/10 rounded-md overflow-hidden">
                    {meta.thumbnail && (
                        <Image
                            src={meta.thumbnail}
                            alt={meta.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 256px"
                            unoptimized={true}
                        />
                    )}
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-headline text-lg font-semibold leading-tight line-clamp-2" title={meta.title}>
                    {meta.title}
                  </h3>
                  {meta.duration && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {meta.duration}
                    </p>
                  )}
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {meta.options.map((s, i) => {
                      const streamLink = `/api/stream?url=${encodeURIComponent(s.url)}&title=${encodeURIComponent(meta.title)}`;
                      
                      return (
                        <Button
                            key={i}
                            asChild
                            variant="secondary"
                            className="bg-primary/20 text-primary-foreground hover:bg-primary/30 shadow-glow-sm"
                        >
                            <a href={streamLink} target="_blank" rel="noopener noreferrer">
                                {getIcon(s.type)}
                                {s.label}
                            </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
