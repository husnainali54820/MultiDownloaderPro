'use client';

import { useState } from 'react';
import Image from 'next/image';
import { extractVideo } from '@/lib/actions';
import type { VideoMeta } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, Download, Clapperboard, Music } from 'lucide-react';

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
      const result = await extractVideo(url);
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'Extraction Failed',
          description: result.error,
        });
      } else {
        setMeta(result.data || null);
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'An Unexpected Error Occurred',
        description: 'Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const getStreamLabel = (stream: VideoMeta['options'][0]) => {
    if (stream.type?.toLowerCase() === 'audio') {
      return `Audio ${stream.format || ''}`.trim();
    }
    
    // Regex to find resolution like "720p" or "1080p"
    const resolutionRegex = /\b(\d{3,4}p)\b/;
  
    // Check label first
    if (stream.label) {
      const labelMatch = stream.label.match(resolutionRegex);
      if (labelMatch) return labelMatch[0];
    }
    
    // Then check quality
    if (stream.quality) {
        const qualityMatch = stream.quality.match(resolutionRegex);
        if (qualityMatch) return qualityMatch[0];
    
        // Fallback for quality like "1920x1080"
        const qualityDimensionsMatch = stream.quality.match(/(?:\d+x)?(\d{3,4})/);
        if (qualityDimensionsMatch) return `${qualityDimensionsMatch[1]}p`;
    }
    
    // Generic fallback
    if (stream.label) return stream.label.split(' ')[0];
    if (stream.quality) return stream.quality.split(' ')[0];
    if (stream.format) return stream.format.toUpperCase();
    
    return "Download";
  }

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
                <div className="relative aspect-video w-full shrink-0 sm:w-64">
                    <Image
                        src={meta.thumbnail}
                        alt={meta.title}
                        fill
                        className="rounded-md object-cover"
                        sizes="(max-width: 640px) 100vw, 256px"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline text-lg font-semibold leading-tight line-clamp-2" title={meta.title}>
                    {meta.title}
                  </h3>
                  {meta.duration && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {meta.duration} &bull; {meta.type}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {meta.options.map((s, i) => (
                      <Button
                        key={i}
                        asChild
                        variant="secondary"
                        className="bg-primary/20 text-primary-foreground hover:bg-primary/30 shadow-glow-sm"
                      >
                        <a href={`/api/stream?target=${encodeURIComponent(s.url)}&title=${encodeURIComponent(meta.title)}`}
                           download
                        >
                           {s.type?.toLowerCase() === 'audio' ? (
                            <Music className="mr-2 h-4 w-4" />
                          ) : (
                            <Clapperboard className="mr-2 h-4 w-4" />
                          )}
                          {getStreamLabel(s)}
                        </a>
                      </Button>
                    ))}
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
