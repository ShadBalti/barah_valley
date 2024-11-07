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
    <div style={{ padding: '20px' }}>
      <h1>Explore Barah Valley</h1>
      <p>Discover the must-visit attractions in Barah Valley.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {touristSpots.map((spot) => (
          <li key={spot.id} style={{ marginBottom: '20px' }}>
            <h2>{spot.name}</h2>
            <p>{spot.description}</p>
            <Image src={spot.imageUrl} alt={spot.name} width={400} height={250} style={{ borderRadius: '8px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourismPage;