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
  // Structured Data (JSON-LD) for rich search results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Barah Valley",
    description: "A hidden gem in Gilgit-Baltistan, Pakistan, Barah Valley offers breathtaking views, rich culture, and a variety of adventure activities.",
    image: "/images/valley-hero.jpg",
    url: "https://barahvalley.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barah Valley, Ghanche, Gilgit-Baltistan, Pakistan",
      addressLocality: "Ghanche",
      addressRegion: "Gilgit-Baltistan",
      postalCode: "00000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.5088,
      longitude: 76.3456,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "215",
    },
    sameAs: [
      "https://facebook.com/BarahValley",
      "https://twitter.com/BarahValley",
      "https://instagram.com/BarahValley",
    ],
  },
};

const RootLayout: React.FC < { children: React.ReactNode } > = ({ children }) => {
  return (
    <html lang="en">
         <head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="description" content={metadata.description} />
              <meta name="robots" content={metadata.robots.index ? 'index' : 'noindex'} />
              <meta name="robots" content={metadata.robots.follow ? 'follow' : 'nofollow'} />
              <meta property="og:type" content={metadata.openGraph.type} />
              <meta property="og:url" content={metadata.openGraph.url} />
              <meta property="og:title" content={metadata.openGraph.title} />
              <meta property="og:description" content={metadata.openGraph.description} />
              <meta property="og:site_name" content={metadata.openGraph.siteName} />
              <meta property="og:image" content={metadata.openGraph.images[0].url} />
              <meta property="og:image:width" content={String(metadata.openGraph.images[0].width)} />
              <meta property="og:image:height" content={String(metadata.openGraph.images[0].height)} />
              <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
              <meta name="twitter:card" content={metadata.twitter.card} />
              <meta name="twitter:title" content={metadata.twitter.title} />
              <meta name="twitter:description" content={metadata.twitter.description} />
              <meta name="twitter:image" content={metadata.twitter.images[0]} />
              <link rel="icon" href="/favicon.ico" />
              <title>{metadata.title.default}</title>
              {/* Structured Data */}
              <script type="application/ld+json">{JSON.stringify(metadata.jsonLd)}</script>
            </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;