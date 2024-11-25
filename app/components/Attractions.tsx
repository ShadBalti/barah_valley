// components/Attractions.tsx
import React from 'react';
import Image from 'next/image';

interface Attraction {
  title: string;
  description: string;
  imageUrl: string;
  category ? : string;
  highlights ? : string[];
}

const attractionsData: Attraction[] = [
  {
    title: 'Mountain Peaks',
    description: 'Enjoy panoramic views from the snow-capped peaks that surround Barah Valley, perfect for hiking and photography.',
    imageUrl: '/images/valley1.jpeg', // Replace with actual image path
    category: "Nature",
    highlights: [
      "Boating available",
      "Nearby hiking trails",
      "Ideal for photography",
    ],
  },
  {
    title: 'Ancient Rock Carvings',
    description: 'Explore the ancient petroglyphs scattered throughout the valley, each telling stories from generations past.',
    imageUrl: '/images/valley2.jpeg.', // Replace with actual image path
    category: "Culture",
    highlights: [
      "Authentic local crafts",
      "Traditional music events",
      "Family-friendly activities",
    ],
  },
  {
    title: 'Riverfront Views',
    description: 'Relax by the riverside, where you can picnic, fish, or simply unwind surrounded by nature.',
    imageUrl: '/images/valley3.jpeg', // Replace with actual image path
    category: "Culture",
    highlights: [
      "Authentic local crafts",
      "Traditional music events",
      "Family-friendly activities",
    ],
  }
];

const Attractions: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Top Attractions in Barah Valley
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {attractionsData.map((attraction, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
              {attraction.category || "Must Visit"}
            </span>

            {/* Image Section */}
            <div className="relative">
              <Image
                src={attraction.imageUrl}
                alt={attraction.title}
                className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{attraction.title}</h3>
              <p className="text-gray-700 mb-4">{attraction.description}</p>

              {/* Highlights */}
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {attraction.highlights?.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;