// app/layout.js
import React from 'react';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';
import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: {
    default: 'Discover Barah Valley – Pakistan\'s Hidden Gem of Culture and Beauty',
    template: '%s | Barah Valley Tourism',
  },
  description: 'Discover Barah Valley, Pakistan\'s hidden gem, featuring breathtaking landscapes, rich cultural traditions, vibrant festivals, and delicious local cuisine. Start your journey today!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'Discover Barah Valley – Pakistan\'s Hidden Gem',
    description: 'Immerse yourself in Barah Valley\'s stunning beauty, from majestic mountains to cultural festivities. Experience the best of Pakistani heritage.',
    url: 'https://barahvalley.vercel.app',
    siteName: 'Barah Valley – Explore Pakistan\'s Hidden Gem',
    images: [
      {
        url: '/images/valley-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenic view of Barah Valley with towering mountains and lush valleys',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Barah Valley – Pakistan\'s Hidden Gem',
    description: 'Explore Barah Valley\'s stunning vistas, rich culture, and unforgettable experiences. Plan your adventure now!',
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
    'Explore Barah Valley',
    'Barah Valley culture',
    'Barah Valley attractions',
    'Pakistan hidden gems',
    'Pakistani cultural heritage',
    'Barah Valley landscapes',
    'Traditional Pakistani food',
    'Barah Valley festivals',
    'Travel to Barah Valley',
    'Adventure in Barah Valley',
    'Barah Valley scenic views',
    'Barah Valley must-visit spots',
    'Barah Valley travel guide',
    'Things to do in Barah Valley',
    'Barah Valley cultural events',
    'Barah Valley traditional crafts',
    'Barah Valley outdoor activities',
    'Barah Valley hiking trails',
    'Best time to visit Barah Valley',
    'Barah Valley eco-tourism',
    'Barah Valley wildlife',
  ],
  alternates: {
    canonical: 'https://barahvalley.vercel.app',
  },
  other: {
    'google-site-verification': '6qYt2H85MUvuaHNGAZKRY87nANOkZ7hRfCgPcs6EOKY', // Optional if using Google Search Console
    owner: 'Barah Valley Tourism Board - Dilshad Hussain ShadBalti',
    contactEmail: 'info@barahvalley.com',
    createdBy: 'Barah Valley Development Team - Dilshad Hussain ShadBalti',
    publishedDate: '2024-11-25',
  },
};
const GA_TRACKING_ID = 'G-18RPH6R102';

const RootLayout: React.FC < { children: React.ReactNode } > = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
         </SessionProvider>
         {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        /> 
      </body>
    </html>
  );
};

export default RootLayout;