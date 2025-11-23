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

export default function XDownloaderPage() {
  // Static content replacing the AI generated content
  const staticSeoContent = `
## How to Download Videos and GIFs from X (Twitter)

Saving media from X (formerly Twitter) is straightforward with our tool. Just follow these steps:

1.  **Locate the Tweet:** Find the video or GIF you wish to download on X.
2.  **Copy the Link:** Click the "Share" icon on the tweet and select "Copy Link".
3.  **Paste & Download:** Paste the tweet URL into the field above and hit the "Download" button.
4.  **Save File:** Select your desired quality and save the video to your device.

## Features of Our X Downloader

*   **Save GIFs:** Easily convert and download Twitter GIFs as MP4 video files.
*   **High Quality:** Download videos in the highest resolution available (up to 1080p).
*   **Fast & Private:** No registration is needed, and we do not track your downloads.
*   **Universal Support:** Works on iPhone, Android, Mac, and Windows.
  `;

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
        <MarkdownRenderer content={staticSeoContent} />
      </section>
    </div>
  );
}
