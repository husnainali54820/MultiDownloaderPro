import { generateSeoContent } from '@/ai/flows/generate-seo-content';
import { DownloaderForm } from '@/components/downloader-form';
import MarkdownRenderer from '@/components/markdown-renderer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Without Watermark - Free & Fast',
  description: 'Download TikTok videos without watermarks quickly and securely. Paste any TikTok link to get started and save videos in high quality for free.',
  keywords: ['tiktok downloader', 'download tiktok video', 'tiktok no watermark', 'save tiktok', 'tiktok video saver'],
   alternates: {
    canonical: '/tiktok-downloader',
  },
};

export default async function TikTokDownloaderPage() {
  const seoContent = await generateSeoContent({
    platform: 'TikTok',
    toolName: 'Multi-Downloader',
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          TikTok Video Downloader
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Download your favorite TikTok videos without the watermark, fast and free.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <DownloaderForm placeholder="Paste TikTok video link here..." />
      </section>

      <section className="mx-auto mt-12 max-w-4xl md:mt-16">
        <MarkdownRenderer content={seoContent.seoContent} />
      </section>
    </div>
  );
}
