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
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Festivals in Barah Valley</h2>
      <div className="space-y-6">
        {festivalsData.map((festival, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{festival.name}</h3>
            <p className="text-gray-700 mb-2">{festival.description}</p>
            <p className="text-gray-600 italic">When: {festival.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Festivals;