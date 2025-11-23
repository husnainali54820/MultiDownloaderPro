import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore the powerful features of Multi Downloader. Download from YouTube, TikTok, Instagram, and more with our secure, fast, and free service.',
};

export default function FeaturesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <div className="prose">
        <h1>Features of Multi Downloader</h1>
        <p>
          Multi Downloader is designed to be the only video downloading tool you'll ever need. We've packed it with features to ensure a seamless, secure, and high-quality experience.
        </p>

        <h2>Wide Platform Support</h2>
        <p>
          Download content from all your favorite social media platforms. Our service is continuously updated to support the latest changes from each platform.
        </p>
        <ul>
            <li>YouTube (Videos, Shorts)</li>
            <li>TikTok (Videos without watermark)</li>
            <li>Instagram (Videos, Reels, Stories)</li>
            <li>Facebook (Public videos)</li>
            <li>X (formerly Twitter) (Videos and GIFs)</li>
        </ul>

        <h2>High-Quality Downloads</h2>
        <p>
          Don't compromise on quality. Our tool extracts all available resolutions, allowing you to download videos in HD (720p, 1080p, and even 4K where available). We also provide options for audio-only extraction in MP3 format.
        </p>

        <h2>Secure & Private</h2>
        <p>
          Your privacy is our priority. We use a secure server-side proxy for all downloads. This means your IP address is never exposed to third-party content servers, and your API keys (if you are a developer) are kept secret. We do not log your download history or store any personal data.
        </p>
        
        <h2>Blazing Fast & Reliable</h2>
        <p>
          Our infrastructure is built for speed. The extraction process is optimized to retrieve download links in seconds. The streaming endpoint ensures a stable and fast download, bypassing common issues like 403 Forbidden errors and IP blocks.
        </p>

        <h2>Simple to Use</h2>
        <p>
          No complicated software to install. Just paste a video link, and our tool does the rest. The clean, intuitive interface provides you with download options in a single click.
        </p>

        <h2>Developer Friendly API</h2>
        <p>
          For developers, we offer a simple yet powerful API that can be integrated into any website or application (WordPress, React, PHP, etc.). Check out our documentation for easy integration.
        </p>
      </div>
    </div>
  );
}
