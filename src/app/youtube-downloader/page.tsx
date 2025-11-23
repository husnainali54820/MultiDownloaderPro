import { generateSeoContent } from '@/ai/flows/generate-seo-content';
import { DownloaderForm } from '@/components/downloader-form';
import MarkdownRenderer from '@/components/markdown-renderer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Video Downloader - Free & Unlimited',
  description: 'Download YouTube videos in various qualities (HD, 1080p, 4K) and formats (MP4, MP3) quickly and securely. Paste a YouTube link to get started.',
  keywords: ['youtube downloader', 'download youtube video', 'youtube to mp4', 'youtube to mp3', 'free youtube downloader'],
   alternates: {
    canonical: '/youtube-downloader',
  },
};

export default async function YouTubeDownloaderPage() {
  const seoContent = await generateSeoContent({
    platform: 'YouTube',
    toolName: 'Multi-Downloader',
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          YouTube Video Downloader
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Securely download any public YouTube video in multiple formats and qualities.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <DownloaderForm placeholder="Paste YouTube video link here..." />
      </section>

      <section className="mx-auto mt-12 max-w-4xl md:mt-16">
        <MarkdownRenderer content={seoContent.seoContent} />
      </section>
    </div>
  );
}
