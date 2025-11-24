import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://multi-downloader.com'),
  title: {
    default: 'All-in-One Social Media Video Downloader | Fast & Free',
    template: '%s | All Social Media Downloader',
  },
  description:
    'The ultimate online tool to download videos and audio from YouTube, TikTok, Instagram, Facebook, and X (Twitter). Our free, fast, and secure downloader makes it easy to save social media content, including reels and images. 100% free online downloader.',
  keywords: [
    'media downloader',
    'social video downloader',
    'video downloader',
    'downloader',
    'free downloader',
    'online free downloader',
    'free online downloader',
    'full video downloader',
    '100% free downloader',
    'all downloader',
    'all social files downloader',
    'image downloader',
    'social media reel downloader',
    'tiktok downloader',
    'youtube downloader',
    'facebook downloader',
    'instagram downloader',
    'x downloader',
    'twitter downloader',
    'youtube to mp4',
    'tiktok no watermark',
    'download instagram reels',
    'save facebook video',
    'online video saver',
  ],
  openGraph: {
    title: 'All-in-One Social Media Video Downloader | Fast & Free',
    description: 'The easiest way to download videos from YouTube, TikTok, Instagram, and more.',
    url: 'https://multi-downloader.com',
    siteName: 'Multi Downloader',
    images: [
      {
        url: '/og-image.png', // Update with your actual OG image path
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All-in-One Social Media Video Downloader | Fast & Free',
    description: 'The easiest way to download videos from YouTube, TikTok, Instagram, and more.',
    images: ['/og-image.png'], // Update with your actual OG image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7506636616175400"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
