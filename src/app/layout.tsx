import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';

export const metadata: Metadata = {
  title: 'NoBuddy - Expert IT Solutions for Business Growth',
  description:
    'Get custom IT solutions from NoBuddy to drive business growth. We offer expert software development, web design, and consulting services. Contact us today!',
  keywords: ['IT solutions', 'software development', 'web design', 'mobile app development', 'NoBuddy', 'technology consulting', 'business growth', 'freelance IT', 'custom software', ' IT services'],
  authors: [{ name: 'NoBuddy' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'NoBuddy - Expert IT Solutions for Business Growth',
    description: 'Get custom IT solutions from NoBuddy to drive business growth. We offer expert software development, web design, and consulting services. Contact us today!',
    type: 'website',
    url: 'https://nobuddy07.netlify.app/',
    siteName: 'NoBuddy',
    images: ["https://www.instagram.com/_nobuddy07/"]
  },
  twitter: {
    title: 'NoBuddy - Expert IT Solutions for Business Growth',
    description: 'Get custom IT solutions from NoBuddy to drive business growth. We offer expert software development, web design, and consulting services. Contact us today!',
    creator: '@_nobuddy07',
  }
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
