import Image from 'next/image';
import React from 'react';
import type { Metadata } from 'next';
import VisitorGuide from '../components/VisitorGuide';

export const metadata: Metadata = {
  title: {
    default: 'Tourism in Barah Valley – Explore Top Attractions and Experiences',
    template: '%s | Barah Valley Tourism',
  },
  description: 'Plan your visit to Barah Valley, a paradise for travelers. Explore top tourist attractions, vibrant festivals, traditional cuisine, scenic landscapes, and thrilling adventure activities.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'Tourism in Barah Valley – Explore Top Attractions',
    description: 'Discover the best of Barah Valley tourism, from stunning natural landscapes to cultural festivals. A perfect destination for nature lovers, adventure seekers, and culture enthusiasts.',
    url: 'https://barahvalley.vercel.app/tourism',
    siteName: 'Barah Valley Tourism',
    images: [
      {
        url: '/images/valley-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'A panoramic view of Barah Valley with tourists enjoying scenic vistas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourism in Barah Valley – Explore and Experience',
    description: 'Plan your trip to Barah Valley, featuring unforgettable attractions, cultural heritage, and adventures. Start exploring today!',
    images: ['/images/valley-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Barah Valley tourism',
    'Barah Valley attractions',
    'Things to do in Barah Valley',
    'Barah Valley travel guide',
    'Adventure tourism in Pakistan',
    'Nature travel destinations',
    'Barah Valley adventure activities',
    'Cultural tourism in Pakistan',
    'Barah Valley hiking trails',
    'Eco-tourism in Barah Valley',
    'Best places to visit in Barah Valley',
    'Barah Valley travel experiences',
    'Barah Valley sightseeing',
    'Barah Valley outdoor activities',
    'Traditional festivals in Barah Valley',
    'Barah Valley must-visit spots',
  ],
  alternates: {
    canonical: 'https://barahvalley.vercel.app/tourism',
  },
};


type TouristSpot = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

const touristSpots: TouristSpot[] = [
  {
    id: 1,
    name: 'Mountain Viewpoint',
    description: 'A breathtaking viewpoint offering panoramic views of Barah Valley.',
    imageUrl: '/public/images/valley1.jpeg', // Use a local image or link to an external image
  },
  {
    id: 2,
    name: 'Ancient Shrine',
    description: 'A historic shrine that reflects the valley’s deep-rooted cultural heritage.',
    imageUrl: '/public/images/valley2.jpeg',
  },
  {
    id: 3,
    name: 'River Trail',
    description: 'A scenic trail along the river, perfect for hikes and nature walks.',
    imageUrl: '/public/images/valley3.jpeg',
  },
  // Add more tourist spots as needed
];

const TourismPage: React.FC = () => {
  return (
    <div className="py-10 px-4 bg-gray-100">
           <VisitorGuide />
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Explore Barah Valley</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {touristSpots.map((spot) => (
              <div key={spot.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={spot.imageUrl}
                  alt={spot.name}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{spot.name}</h3>
                  <p className="text-gray-600">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
     </div>
  );
};

export default TourismPage;