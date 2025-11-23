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

export default function TikTokDownloaderPage() {
  // Static content replacing the AI generated content
  const staticSeoContent = `
## How to Download TikTok Videos Without Watermark

Downloading TikTok videos without the annoying watermark is simple. Follow these steps:

1.  **Find the Video:** Open the TikTok app and find the video you want to save.
2.  **Copy the Link:** Tap the "Share" button (arrow icon) and select "Copy Link".
3.  **Paste:** Go to our downloader, paste the link into the box above, and click "Download".
4.  **Save:** Choose the "No Watermark" option to save the clean video to your device.

## Why Use Our TikTok Downloader?

*   **No Watermark:** Remove the TikTok logo and username for a clean video file.
*   **High Quality:** Save videos in original MP4 HD quality.
*   **Fast Speeds:** Download content in seconds directly to your phone or PC.
*   **Free Forever:** No limits on how many videos you can download.
  `;

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
        <MarkdownRenderer content={staticSeoContent} />
      </section>
    </div>
  );
}
