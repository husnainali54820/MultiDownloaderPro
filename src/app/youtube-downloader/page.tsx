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

export default function YouTubeDownloaderPage() {
  // Static content replacing the AI generated content
  const staticSeoContent = `
## How to Download YouTube Videos

Downloading videos from YouTube is fast and easy with our tool. Here is how to do it:

1.  **Copy the Link:** Go to YouTube, open the video you want to save, and copy the URL from the address bar or share button.
2.  **Paste the URL:** Paste the link into the search box above.
3.  **Start Download:** Click the "Download" button to process the video.
4.  **Choose Quality:** Select your preferred format (MP4, MP3) and resolution (720p, 1080p, 4K) to save the file.

## Why Use Our YouTube Downloader?

*   **Multiple Formats:** Support for MP4 video and MP3 audio conversion.
*   **High Definition:** Download videos in HD, Full HD, and even 4K resolution.
*   **Unlimited Downloads:** There are no limits on the number of videos you can download.
*   **Fast & Secure:** Our service is optimized for speed and does not store your user data.
  `;

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
        <MarkdownRenderer content={staticSeoContent} />
      </section>
    </div>
  );
}
