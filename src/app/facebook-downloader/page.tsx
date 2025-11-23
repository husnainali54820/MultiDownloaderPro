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

export default function FacebookDownloaderPage() {
  // Static content replacing the AI generated content
  const staticSeoContent = `
## How to Download Facebook Videos

Downloading videos from Facebook is simple with our Multi-Downloader tool. Follow these steps to save your favorite content:

1.  **Find the Video:** Go to Facebook and locate the video you want to download.
2.  **Copy the Link:** Click on the "Share" button or the three dots (...) and select "Copy Link".
3.  **Paste & Download:** Paste the URL into the box above and click the "Download" button.
4.  **Save:** Choose your preferred video quality and save it to your device.

## Why Use Our Facebook Downloader?

*   **High Quality:** Download videos in HD (720p, 1080p) whenever available.
*   **Fast & Free:** No hidden fees, no registration required, and fast processing speeds.
*   **Secure:** We do not store your download history or the videos you download.
*   **Cross-Platform:** Works seamlessly on mobile, tablet, and desktop devices.
  `;

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
        <MarkdownRenderer content={staticSeoContent} />
      </section>
    </div>
  );
}
