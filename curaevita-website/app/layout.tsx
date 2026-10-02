import type { Metadata } from 'next';
import './globals.css';
import './refined.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://curaevita.com'),
  applicationName: 'CuraeVita Health Apps',
  title: {
    default: 'CuraeVita Health Apps | GLP-1 Tracker for Android',
    template: '%s | CuraeVita',
  },
  description: 'Download CuraeVita apps for GLP-1, menopause, ADHD, gut symptoms and migraine on Google Play. Private Android diaries with appointment-ready PDF reports.',
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
    title: 'CuraeVita | Five Private Health Tracker Apps for Android',
    description: 'Download CuraeVita apps for GLP-1, menopause, ADHD, gut symptoms and migraine on Google Play. Private Android diaries with appointment-ready PDF reports.',
    type: 'website',
    url: '/',
    siteName: 'CuraeVita Health Apps',
    locale: 'en_GB',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps and Companion app icons' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CuraeVita | Five Private Health Tracker Apps for Android',
    description: 'Download CuraeVita apps for GLP-1, menopause, ADHD, gut symptoms and migraine on Google Play. Private Android diaries with appointment-ready PDF reports.',
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
