import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dukefitnessclub.com';
  const pages = [
    '',
    '/gym',
    '/swimming-pool',
    '/restaurant',
    '/pool-game-zone',
    '/trainers',
    '/membership',
    '/schedule',
    '/tools',
    '/gallery',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }));
}
