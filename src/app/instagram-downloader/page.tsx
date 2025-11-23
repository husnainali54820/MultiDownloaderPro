import { generateSeoContent } from '@/ai/flows/generate-seo-content';
import { DownloaderForm } from '@/components/downloader-form';
import MarkdownRenderer from '@/components/markdown-renderer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Downloader - Save Videos, Reels & Stories',
  description: 'Download Instagram videos, Reels, and Stories quickly and securely. Paste an Instagram link to save high-quality content for free. Anonymous and easy.',
  keywords: ['instagram video downloader', 'download instagram reels', 'instagram story saver', 'insta downloader', 'ig downloader'],
   alternates: {
    canonical: '/instagram-downloader',
  },
};

export default async function InstagramDownloaderPage() {
  const seoContent = await generateSeoContent({
    platform: 'Instagram',
    toolName: 'Multi-Downloader',
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          Instagram Downloader
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Easily save public Instagram videos, Reels, and Stories to your device.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <DownloaderForm placeholder="Paste Instagram post, Reel, or Story link..." />
      </section>

      <section className="mx-auto mt-12 max-w-4xl md:mt-16">
        <MarkdownRenderer content={seoContent.seoContent} />
      </section>
    </div>
  );
}
