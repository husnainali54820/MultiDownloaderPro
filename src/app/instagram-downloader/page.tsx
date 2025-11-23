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

export default function InstagramDownloaderPage() {
  // Static content replacing the AI generated content
  const staticSeoContent = `
## How to Download Instagram Reels and Videos

Our Instagram Downloader makes it easy to save your favorite content. Just follow these steps:

1.  **Open Instagram:** Find the Reel, Video, or Post you want to save.
2.  **Copy the URL:** Tap the share icon (paper airplane) or the three dots (...) and select "Copy Link".
3.  **Paste the Link:** Insert the link into the input field above.
4.  **Download:** Click the download button and the video will save to your device.

## Features of Our Instagram Saver

*   **Download Reels:** Save short-form Reels with audio.
*   **High Resolution:** Get the best quality available for every post.
*   **No Login Needed:** You don't need to sign in to your Instagram account.
*   **Completely Free:** unlimited downloads with no restrictions.
  `;

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
        <MarkdownRenderer content={staticSeoContent} />
      </section>
    </div>
  );
}
