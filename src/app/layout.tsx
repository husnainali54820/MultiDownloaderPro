import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script'; // Import Script for AdSense
import './globals.css'; // Critical for Tailwind styles
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';


// --- 1. SEO METADATA & KEYWORDS ---
export const metadata: Metadata = {
  title: 'Multi Downloader - Best Free Video Downloader (YouTube, TikTok, IG)',
  description: 'Download videos from YouTube, TikTok (No Watermark), Instagram, Facebook, and Twitter (X) in 4K/HD. Free, fast, and secure online video downloader.',
  alternates: {
    canonical: 'https://multi-downloader.com',
  },
  keywords: [
    // Core Keywords
    'video downloader', 'online video downloader', '4k video downloader', 'free video downloader',
    // Platform Specific
    'youtube downloader', 'youtube to mp4', 'save youtube video',
    'tiktok downloader', 'tiktok no watermark', 'download tiktok video',
    'instagram downloader', 'instagram reels saver', 'download instagram stories',
    'facebook video downloader', 'fb video saver',
    'twitter video downloader', 'x video downloader',
    // Long-tail
    'fastest video downloader', 'secure video downloader', 'mobile video downloader', 'allinonedownloader', 'all social media downloader', 'online free downloader', 'unlimited downloader'
  ],
  openGraph: {
    title: 'Multi Downloader - All-in-One Social Media Video Saver',
    description: 'Download videos instantly from YouTube, TikTok, Instagram, FB & X. No watermark, high quality, and 100% free.',
    url: 'https://multi-downloader.com',
    siteName: 'Multi Downloader',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Ensure you have an image at public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Multi Downloader Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi Downloader - Free Video Downloader',
    description: 'Save videos from YouTube, TikTok, Instagram & more in HD.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  // --- 2. TECHNICAL SEO: SCHEMA MARKUP ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Multi Downloader',
    url: 'https://multi-downloader.com',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    description: 'A free online tool to download videos from YouTube, TikTok, Instagram, Facebook, and X in high quality.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
    },
    featureList: [
      'YouTube 4K Downloader',
      'TikTok No Watermark',
      'Instagram Reels & Stories',
      'Facebook HD Video',
      'Twitter/X Media Saver',
    ],
  };

  // --- 3. VISUAL COMPONENT ---
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      
      {/* <--- ADDED: Google AdSense Script Here ---> */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7506636616175400"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Inject Schema into Head for Google Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      {/* SEO Content Block (Hidden from visual hierarchy but visible to bots/users for context) */}
      <section className="mt-16 mx-auto max-w-4xl prose dark:prose-invert text-left">
        <h3>Why use Multi Downloader?</h3>
        <p>
          Multi Downloader is the most efficient way to save videos online. We support 
          <strong> MP4 and MP3 formats</strong> with resolutions up to 4K. Whether you need a 
          <em>TikTok video without watermark</em> or a <em>YouTube music playlist</em>, our tool handles it instantly.
        </p>
      </section>
    </div>
  );
}
