import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

// A generic TikTok icon as it's not in lucide-react
export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16.5 6.5a6 6 0 0 0-6-6v12a3 3 0 0 1-3-3a3 3 0 0 1 3-3V1.5a9 9 0 0 1 5.24 16.33"/>
    </svg>
);


const socialPlatforms = [
  { name: 'YouTube', icon: <Youtube className="h-8 w-8" />, href: '/youtube-downloader' },
  { name: 'TikTok', icon: <TikTokIcon className="h-8 w-8" />, href: '/tiktok-downloader' },
  { name: 'Instagram', icon: <Instagram className="h-8 w-8" />, href: '/instagram-downloader' },
  { name: 'Facebook', icon: <Facebook className="h-8 w-8" />, href: '/facebook-downloader' },
  { name: 'X (Twitter)', icon: <Twitter className="h-8 w-8" />, href: '/x-downloader' },
];

export function SocialIconLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-4', className)}>
      {socialPlatforms.map((platform) => (
        <Button
          key={platform.name}
          variant="outline"
          size="lg"
          asChild
          className="h-20 w-32 flex-col gap-2 border-primary/20 text-foreground/80 hover:bg-primary/10 hover:text-foreground hover:border-primary/50"
        >
          <Link href={platform.href}>
            {platform.icon}
            <span className="text-sm font-medium">{platform.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
