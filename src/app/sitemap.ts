import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://multi-downloader.com';

  const downloaderPages = [
    '/youtube-downloader',
    '/tiktok-downloader',
    '/instagram-downloader',
    '/facebook-downloader',
    '/x-downloader',
  ];

  const staticPages = [
    '/about-us',
    '/features',
    '/privacy-policy',
    '/terms-of-service',
  ];

  // 1. Homepage (Highest Priority)
  const home = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  };

  // 2. Tool Pages (High Priority)
  const downloaderUrls = downloaderPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Info Pages (Lower Priority)
  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [home, ...downloaderUrls, ...staticUrls];
}
