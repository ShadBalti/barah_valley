// app/layout.js
import React from 'react';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Discover Barah Valley – Pakistans Hidden Gem of Culture and Beauty',
    template: '%s | Barah Valley Tourism',
  },
  description: 'Explore Barah Valley, Pakistans hidden gem, with stunning landscapes, vibrant festivals, unique culture, traditional food, and must-visit spots. Begin your adventure in Barah Valley today!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'Discover Barah Valley – Pakistans Hidden Gem',
    description: 'Immerse yourself in the scenic beauty and cultural richness of Barah Valley. From breathtaking mountains to traditional cuisine, experience the essence of Pakistani heritage in Barah Valley.',
    url: 'https://barahvalley.vercel.app',
    siteName: 'Barah Valley – Explore Pakistans Hidden Gem',
    images: [
      {
        url: '/images/valley-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenic view of Barah Valley with mountains and valleys',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Barah Valley – Pakistan Hidden Gem',
    description: 'Explore Barah Valley scenic views, cultural events, and traditional Pakistani experiences. Plan your next adventure here!',
    images: ['/images/valley-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Barah Valley',
    'Barah Valley Pakistan',
    'Barah Valley tourism',
    'Pakistan travel destinations',
    'explore Barah Valley',
    'Barah Valley culture',
    'Barah Valley attractions',
    'Pakistan hidden gems',
    'Pakistani cultural heritage',
    'Barah Valley landscapes',
    'traditional Pakistani food',
    'Barah Valley festivals',
    'travel to Barah Valley',
    'adventure in Barah Valley',
  ],
  alternates: {
    canonical: 'https://barahvalley.vercel.app',
  },
  other: {
    'google-site-verification': '6qYt2H85MUvuaHNGAZKRY87nANOkZ7hRfCgPcs6EOKY', // Optional if using Google Search Console
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