import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://multi-downloader.com';

  const staticPages = [
    '/',
    '/about-us',
    '/features',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const downloaderPages = [
    '/youtube-downloader',
    '/tiktok-downloader',
    '/instagram-downloader',
    '/facebook-downloader',
    '/x-downloader',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const downloaderUrls = downloaderPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.9,
  }));

  return [
    ...staticUrls,
    ...downloaderUrls,
  ];
}
