import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://curaevita.com'),
  applicationName: 'CuraeVita Health Apps',
  title: {
    default: 'CuraeVita Health Apps | Private Android Companions',
    template: '%s | CuraeVita',
  },
  description: 'Privacy-conscious Android health tracking apps for GLP-1 treatment, menopause, ADHD, digestive symptoms and migraine records.',
  alternates: { canonical: '/' },
  category: 'health',
  keywords: ['health tracking apps', 'Android health tracker', 'personal health record', 'symptom tracker', 'medication tracker'],
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
    title: 'CuraeVita Health Apps | Private Android Companions',
    description: 'Focused health trackers designed around privacy, useful reports and clearer healthcare conversations.',
    type: 'website',
    url: '/',
    siteName: 'CuraeVita Health Apps',
    locale: 'en_GB',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps and Companion app icons' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CuraeVita Health Apps | Private Android Companions',
    description: 'Focused health trackers designed around privacy, useful reports and clearer healthcare conversations.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
