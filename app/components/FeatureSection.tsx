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
  {
    id: 4,
    title: 'Adventure Activities',
    description: 'Engage in thrilling outdoor activities such as trekking, camping, and mountain climbing in the rugged terrains of Barah Valley.',
    icon: '🧗‍♂️',
  },
  {
    id: 5,
    title: 'Wildlife Watching',
    description: 'Discover the diverse wildlife of Barah Valley, from majestic eagles to unique species of flora and fauna.',
    icon: '🦅',
  },
  {
    id: 6,
    title: 'Sustainable Tourism',
    description: 'Participate in eco-friendly travel practices that help preserve the natural beauty and cultural heritage of Barah Valley.',
    icon: '🌱',
  },
  {
    id: 7,
    title: 'Community Life',
    description: 'Immerse yourself in the warm, community-driven lifestyle of the locals, who live harmoniously with nature.',
    icon: '🤝',
  },
  {
    id: 8,
    title: 'Photography Spots',
    description: 'Capture stunning views of Barah Valley’s landscapes, from snow-capped peaks to lush green meadows.',
    icon: '📸',
  },
  {
    id: 9,
    title: 'Historical Sites',
    description: 'Visit ancient temples, rock carvings, and historical landmarks that tell the story of Barah Valley’s rich past.',
    icon: '🏰',
  },
  {
    id: 10,
    title: 'Traditional Cuisine',
    description: 'Savor the authentic flavors of Barah Valley with dishes like momo, thukpa, and local apricot-based desserts.',
    icon: '🍲',
  },
  {
    id: 11,
    title: 'Spiritual Heritage',
    description: 'Explore the spiritual roots of the region with Tibetan Buddhist practices, monasteries, and sacred rituals.',
    icon: '⛩️',
  },
  {
    id: 12,
    title: 'Festivals & Events',
    description: 'Join in the celebrations of Barah Valley’s unique festivals, from cultural dances to seasonal festivals.',
    icon: '🎉',
  },
  {
    id: 13,
    title: 'Agriculture & Farming',
    description: 'Discover the sustainable agricultural practices that sustain the local community, from terraced fields to organic farming.',
    icon: '🌾',
  },
  {
    id: 14,
    title: 'Mountain Views',
    description: 'Take in panoramic views of the majestic mountains surrounding Barah Valley, perfect for relaxation and photography.',
    icon: '🏞️',
  },
  {
    id: 15,
    title: 'Local Handicrafts',
    description: 'Support local artisans by purchasing unique, handcrafted goods, such as woolen garments and wooden carvings.',
    icon: '🧵',
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