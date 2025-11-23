import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ChevronDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { TikTokIcon } from './social-icon-links';

const toolItems = [
  { href: '/youtube-downloader', label: 'YouTube', icon: <Youtube className="size-4" /> },
  { href: '/tiktok-downloader', label: 'TikTok', icon: <TikTokIcon className="size-4" /> },
  { href: '/instagram-downloader', label: 'Instagram', icon: <Instagram className="size-4" /> },
  { href: '/facebook-downloader', label: 'Facebook', icon: <Facebook className="size-4" /> },
  { href: '/x-downloader', label: 'X (Twitter)', icon: <Twitter className="size-4" /> },
];


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Multi Downloader Logo" width={28} height={28} />
            <span className="hidden font-bold sm:inline-block font-headline">
              Multi Downloader
            </span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end gap-4 text-sm lg:gap-6">
           <Link href="/" className="text-foreground/60 hover:text-foreground/80 transition-colors">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-foreground/60 hover:text-foreground/80 px-2">
                Tools
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {toolItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/features" className="text-foreground/60 hover:text-foreground/80 transition-colors">
            Features
          </Link>
           <Link href="/about-us" className="text-foreground/60 hover:text-foreground/80 transition-colors">
            About Us
          </Link>
        </div>

      </div>
    </header>
  );
}
