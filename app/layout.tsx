import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jianwen Wu',
  description:
    'Jianwen Wu — Ph.D. Student in Computer Science at Purdue University.',
  keywords: [
    'Jianwen Wu',
    'Purdue',
    'Computer Science',
    'Efficient AI',
    'Multimodal AI',
    'Machine Learning Systems',
    'Generative Models',
  ],
  openGraph: {
    title: 'Jianwen Wu',
    description:
      'Ph.D. Student in Computer Science at Purdue University.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
