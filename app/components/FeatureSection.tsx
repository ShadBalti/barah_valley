// components/FeatureSection.tsx
import React from 'react';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Tourism',
    description: 'Explore the scenic beauty of Barah Valley with numerous hiking and sightseeing opportunities.',
    icon: '🌄',
  },
  {
    id: 2,
    title: 'Culture',
    description: 'Experience the rich cultural heritage of Barah Valley, including traditional music, food, and festivals.',
    icon: '🎶',
  },
  {
    id: 3,
    title: 'Local Businesses',
    description: 'Support local businesses offering unique products and services, from handmade crafts to delicious food.',
    icon: '🏪',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Visit Barah Valley</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;