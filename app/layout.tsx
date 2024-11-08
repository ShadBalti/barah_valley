// app/layout.js
import React from 'react';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Explore Barah Valley',
    template: '%s | Barah Valley',
  },
  description: 'Discover the beauty and culture of Barah Valley, a hidden gem with breathtaking landscapes, rich history, and vibrant traditions.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'Explore Barah Valley',
    description: 'Discover the breathtaking landscapes and rich cultural heritage of Barah Valley.',
    url: 'https://barahvalley.vercel.app',
    siteName: 'Barah Valley',
    images: [
      {
        url: '/images/valley-hero.jpg',
        width: 800,
        height: 600,
        alt: 'View of Barah Valley',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Barah Valley',
    description: 'Discover the beauty and culture of Barah Valley.',
    images: ['/images/valley-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
    
};

const RootLayout: React.FC < { children: React.ReactNode } > = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;