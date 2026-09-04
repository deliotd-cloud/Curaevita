import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://curaevita.com'),
  applicationName: 'CuraeVita Health Apps',
  title: {
    default: 'CuraeVita Health Apps | GLP-1 Tracker for Android',
    template: '%s | CuraeVita',
  },
  description: 'Private Android health tracking apps. Get GLP-1 Companion for dose, injection-site, weight and side-effect records with PDF reports. Menopause Companion is coming soon.',
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  category: 'health',
  keywords: ['GLP-1 tracker app', 'GLP-1 injection log', 'semaglutide tracker', 'tirzepatide tracker', 'Android health tracker', 'menopause symptom tracker'],
  icons: {
    icon: '/favicon.svg',
    apple: '/icon.png',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'CuraeVita Health Apps | GLP-1 Companion for Android',
    description: 'Get GLP-1 Companion for private dose, injection-site, weight and side-effect tracking. Menopause Companion is coming soon.',
    type: 'website',
    url: '/',
    siteName: 'CuraeVita Health Apps',
    locale: 'en_GB',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps and Companion app icons' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CuraeVita Health Apps | GLP-1 Companion for Android',
    description: 'Get GLP-1 Companion for private dose, injection-site, weight and side-effect tracking. Menopause Companion is coming soon.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
