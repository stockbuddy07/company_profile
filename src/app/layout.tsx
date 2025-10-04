import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';

export const metadata: Metadata = {
  title: 'zScore - True Reputation Onchain, Without KYC',
  description:
    'Eigen AVS for reputation, powered by AI. Build your onchain reputation without KYC requirements.',
  keywords: ['blockchain', 'reputation', 'onchain', 'AI', 'KYC', 'zScore'],
  authors: [{ name: 'zScore Team' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'zScore - True Reputation Onchain, Without KYC',
    description: 'Eigen AVS for reputation, powered by AI',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-clash-display">
        <Header />
        {children}
      </body>
    </html>
  );
}
