import { DownloaderForm } from '@/components/downloader-form';
import { SocialIconLinks } from '@/components/social-icon-links';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          All Social Media Downloader
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Paste any video link from YouTube, TikTok, Instagram, and more. Securely
          download your content with a single click.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <DownloaderForm placeholder="Paste any video link here..." />
      </section>

      <section className="mt-12 text-center md:mt-16">
        <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
          Choose a Platform
        </h2>
        <p className="mx-auto mt-2 max-w-[600px] text-base text-foreground/70">
          Or visit one of our dedicated downloader pages for specific instructions
          and features.
        </p>
        <SocialIconLinks className="mt-8" />
      </section>
    </div>
  );
}
