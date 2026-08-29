import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CuraeVita Health Apps',
    short_name: 'CuraeVita',
    description: 'Privacy-conscious Android health tracking Companions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f5ee',
    theme_color: '#062534',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
