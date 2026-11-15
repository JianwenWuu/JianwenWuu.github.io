import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteConfig } from '@/data/site';
import './globals.css';

// Self-hosted fonts (SIL Open Font License, see app/fonts/).
const newsreader = localFont({
  src: [
    {
      path: './fonts/newsreader-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/newsreader-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/newsreader-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/newsreader-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-newsreader',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

const tenor = localFont({
  src: './fonts/tenor-sans-latin-400-normal.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-tenor',
  display: 'swap',
});

const description = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description,
  keywords: [
    'Jianwen Wu',
    'Purdue',
    'Computer Science',
    'EcoAI Lab',
    'Efficient AI',
    'Algorithm-Hardware Co-design',
    'Generative Models',
    'Diffusion LLMs',
  ],
  openGraph: {
    title: siteConfig.name,
    description,
    url: '/',
    type: 'profile',
    images: [
      { url: '/og.jpg', width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description,
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${tenor.variable}`}>
      <body>{children}</body>
    </html>
  );
}
