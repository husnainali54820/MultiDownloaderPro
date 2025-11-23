import { generateSeoContent } from '@/ai/flows/generate-seo-content';
import { DownloaderForm } from '@/components/downloader-form';
import MarkdownRenderer from '@/components/markdown-renderer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook Video Downloader - Download FB Videos for Free',
  description: 'Download public Facebook videos in HD quality quickly and securely. Paste any FB video link to get started. Fast, free, and no registration required.',
  keywords: ['facebook video downloader', 'download facebook video', 'fb downloader', 'save facebook video', 'facebook to mp4'],
  alternates: {
    canonical: '/facebook-downloader',
  },
};

export default async function FacebookDownloaderPage() {
  const seoContent = await generateSeoContent({
    platform: 'Facebook',
    toolName: 'Multi-Downloader',
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          Facebook Video Downloader
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Save any public Facebook video to your device for offline viewing.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <DownloaderForm placeholder="Paste Facebook video link here..." />
      </section>

      <section className="mx-auto mt-12 max-w-4xl md:mt-16">
        <MarkdownRenderer content={seoContent.seoContent} />
      </section>
    </div>
  );
}
