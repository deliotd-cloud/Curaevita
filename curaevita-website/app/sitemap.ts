import type { MetadataRoute } from 'next';
import { companions } from './lib/apps';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-29T00:00:00.000Z');
  const pages: MetadataRoute.Sitemap = [
    { url: 'https://curaevita.com/', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://curaevita.com/apps/', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://curaevita.com/about/', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://curaevita.com/support/', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://curaevita.com/editorial-standards/', lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://curaevita.com/privacy/', lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://curaevita.com/terms/', lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];

  return [
    ...pages,
    ...companions.map((app) => ({
      url: `https://curaevita.com/apps/${app.slug}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: app.phase === 'testing' ? 0.9 : 0.7,
    })),
  ];
}
