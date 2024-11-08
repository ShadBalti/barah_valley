// components/Festivals.tsx
import React from 'react';

interface Festival {
  name: string;
  description: string;
  date: string;
}

const festivalsData: Festival[] = [
  {
    name: 'Spring Blossom Festival',
    description: 'Celebrate the arrival of spring with vibrant flowers and cultural performances that welcome the new season.',
    date: 'March - April'
  },
  {
    name: 'Harvest Festival',
    description: 'Marking the end of the harvest season, this festival includes communal feasts, music, and traditional dances.',
    date: 'September - October'
  },
  {
    name: 'Winter Solstice Celebration',
    description: 'Experience traditional storytelling and cozy gatherings as locals honor the longest night of the year.',
    date: 'December 21'
  }
];

const Festivals: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Festivals in Barah Valley</h2>
        <div className="space-y-6">
          {festivalsData.map((festival, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{festival.name}</h3>
              <p className="text-gray-700 mb-2">{festival.description}</p>
              <p className="text-sm text-gray-600 italic">When: {festival.date}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Festivals;