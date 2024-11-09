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
    date: 'March - April',
  },
  {
    name: 'Harvest Festival',
    description: 'Marking the end of the harvest season, this festival includes communal feasts, music, and traditional dances.',
    date: 'September - October',
  },
  {
    name: 'Winter Solstice Celebration',
    description: 'Experience traditional storytelling and cozy gatherings as locals honor the longest night of the year.',
    date: 'December 21',
  },
  {
    name: 'Losar - Balti New Year',
    description: 'The traditional Balti New Year, marked by rituals, prayers, and festive celebrations, welcoming the new year with community dances and feasts.',
    date: 'February - March',
  },
  {
    name: 'Shandoor Polo Festival',
    description: 'A vibrant festival held at the Shandoor Pass, featuring polo matches and a celebration of local culture, bringing together different regions of Gilgit-Baltistan.',
    date: 'June',
  },
  {
    name: 'Tibetan Buddhism Festival',
    description: 'A spiritual festival celebrated with prayers, rituals, and cultural events, reflecting the Tibetan Buddhist heritage of the region.',
    date: 'October',
  },
  {
    name: 'Balti Cuisine Festival',
    description: 'A feast celebrating the traditional dishes of the Balti people, featuring local specialties such as momo, thukpa, and apricot-based desserts.',
    date: 'July - August',
  },
  {
    name: 'Summer Solstice Celebration',
    description: 'A festive occasion celebrating the longest day of the year with community gatherings, music, dance, and traditional rituals.',
    date: 'June 21',
  },
  {
    name: 'Sacred Mountain Festival',
    description: 'A festival paying homage to the sacred mountains of the region, where locals perform prayers and rituals for the protection and blessings of the mountains.',
    date: 'August',
  },
  {
    name: 'Traditional Balti Music and Dance Festival',
    description: 'A cultural festival where local musicians and dancers showcase the traditional Balti folk music and dances, celebrating the region’s artistic heritage.',
    date: 'May - June',
  },
  {
    name: 'Balti Folk Art Exhibition',
    description: 'A celebration of Balti arts and crafts, including wood carving, embroidery, and painting, showcasing the unique folk art of the region.',
    date: 'November',
  },
  {
    name: 'Chilam Joshi Festival',
    description: 'A traditional festival celebrating the beginning of summer, marked by community gatherings, music, and dances.',
    date: 'May',
  },
  {
    name: 'Trekking and Adventure Festival',
    description: 'A celebration of the region’s natural beauty with activities such as trekking, mountaineering, and outdoor adventures, perfect for nature enthusiasts.',
    date: 'July - September',
  },
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