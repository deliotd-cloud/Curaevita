import type { MetadataRoute } from 'next';
import { companions } from './lib/apps';
import { guides } from './lib/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-04T00:00:00.000Z');
  const pages: MetadataRoute.Sitemap = [
    { url: 'https://curaevita.com/', lastModified, changeFrequency: 'weekly', priority: 1, images: ['https://curaevita.com/og.png'] },
    { url: 'https://curaevita.com/apps/', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://curaevita.com/guides/', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://curaevita.com/press/', lastModified, changeFrequency: 'monthly', priority: 0.6 },
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
      priority: app.phase === 'published' ? 0.95 : app.phase === 'review' ? 0.85 : 0.65,
      images: [`https://curaevita.com${app.image}`],
    })),
    ...guides.map((guide) => ({
      url: `https://curaevita.com/guides/${guide.slug}/`,
      lastModified: new Date(`${guide.modifiedDate}T00:00:00.000Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      images: ['https://curaevita.com/og.png'],
    })),
  ];
}
