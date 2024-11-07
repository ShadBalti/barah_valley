'use client';
import Image from 'next/image';
import React from 'react';

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