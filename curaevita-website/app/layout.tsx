import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CuraeVita | Care for life',
    template: '%s | CuraeVita',
  },
  description: 'Privacy-conscious health tracking apps for clearer patterns, reports and healthcare conversations.',
  icons: {
    icon: '/favicon.svg',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'CuraeVita | Care for life',
    description: 'Focused health Companions, designed around privacy and useful everyday tracking.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'CuraeVita | Care for life',
    description: 'Focused health Companions, designed around privacy and useful everyday tracking.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
