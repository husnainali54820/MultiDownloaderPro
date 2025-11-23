import { generateSeoContent } from '@/ai/flows/generate-seo-content';
import { DownloaderForm } from '@/components/downloader-form';
import MarkdownRenderer from '@/components/markdown-renderer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'X (Twitter) Video Downloader - Save Videos & GIFs',
  description: 'Download videos and GIFs from X (formerly Twitter) quickly and securely. Paste a tweet link to save media directly to your device for free.',
  keywords: ['x downloader', 'twitter video downloader', 'download twitter video', 'save tweet video', 'twitter gif downloader'],
   alternates: {
    canonical: '/x-downloader',
  },
};

export default async function XDownloaderPage() {
  const seoContent = await generateSeoContent({
    platform: 'X (formerly Twitter)',
    toolName: 'Multi-Downloader',
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          X (Twitter) Video Downloader
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Save videos and GIFs from X (Twitter) directly to your device.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <DownloaderForm placeholder="Paste X (Tweet) link here..." />
      </section>

      <section className="mx-auto mt-12 max-w-4xl md:mt-16">
        <MarkdownRenderer content={seoContent.seoContent} />
      </section>
    </div>
  );
}
