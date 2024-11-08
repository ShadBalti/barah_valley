// components/Attractions.tsx
import React from 'react';
import Image from 'next/image';

interface Attraction {
  title: string;
  description: string;
  imageUrl: string;
}

const attractionsData: Attraction[] = [
  {
    title: 'Mountain Peaks',
    description: 'Enjoy panoramic views from the snow-capped peaks that surround Barah Valley, perfect for hiking and photography.',
    imageUrl: '/images/valley1.jpeg' // Replace with actual image path
  },
  {
    title: 'Ancient Rock Carvings',
    description: 'Explore the ancient petroglyphs scattered throughout the valley, each telling stories from generations past.',
    imageUrl: '/images/valley2.jpeg' // Replace with actual image path
  },
  {
    title: 'Riverfront Views',
    description: 'Relax by the riverside, where you can picnic, fish, or simply unwind surrounded by nature.',
    imageUrl: '/images/valley2.jpeg' // Replace with actual image path
  }
];

const Attractions: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Attractions in Barah Valley</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractionsData.map((attraction, index) => (
          <div 
            key={index} 
            className="rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden bg-white"
          >
            <Image src={attraction.imageUrl} alt={attraction.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{attraction.title}</h3>
              <p className="text-gray-600">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;