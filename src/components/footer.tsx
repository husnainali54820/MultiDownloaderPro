import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react';
import { TikTokIcon } from './social-icon-links';

const toolItems = [
    { href: '/youtube-downloader', label: 'YouTube Downloader', icon: <Youtube className="size-4" /> },
    { href: '/tiktok-downloader', label: 'TikTok Downloader', icon: <TikTokIcon className="size-4" /> },
    { href: '/instagram-downloader', label: 'Instagram Downloader', icon: <Instagram className="size-4" /> },
    { href: '/facebook-downloader', label: 'Facebook Downloader', icon: <Facebook className="size-4" /> },
    { href: '/x-downloader', label: 'X (Twitter) Downloader', icon: <Twitter className="size-4" /> },
];

const companyItems = [
    { href: '/features', label: 'Features' },
    { href: '/about-us', label: 'About Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
]

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
                 <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.svg" alt="Multi Downloader Logo" width={28} height={28} />
                    <span className="font-bold sm:inline-block font-headline">
                    Multi Downloader
                    </span>
                </Link>
                <p className="mt-4 text-sm text-muted-foreground max-w-md">
                    The simplest and most reliable way to download videos and audio from all major social media platforms. Fast, free, and secure.
                </p>
            </div>
            <div>
                <h3 className="font-headline font-semibold tracking-tight text-primary-foreground">Tools</h3>
                <ul className="mt-4 space-y-2">
                    {toolItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-headline font-semibold tracking-tight text-primary-foreground">Company</h3>
                <ul className="mt-4 space-y-2">
                     {companyItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
             <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {currentYear} Multi Downloader. All rights reserved.
                </p>
                <p className="max-w-prose text-center text-xs text-muted-foreground sm:text-right">
                    Disclaimer: This site is for personal use only. Downloading copyrighted material without permission may be illegal. Please respect intellectual property rights.
                </p>
             </div>
        </div>
      </div>
    </footer>
  );
}
