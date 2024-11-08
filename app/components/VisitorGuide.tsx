// components/VisitorGuide.tsx
import React from 'react';

interface GuideSection {
  title: string;
  content: string;
}

const guideSections: GuideSection[] = [
  {
    title: 'Respecting Local Culture',
    content: 'Visitors are encouraged to dress modestly, seek permission before photographing people, and be mindful of local customs. Respect the local way of life and engage politely with residents.'
  },
  {
    title: 'Safety and Preparedness',
    content: 'Pack appropriately for the mountainous terrain and changing weather. Carry essentials like water, sunscreen, and first-aid supplies, especially if planning to hike or explore remote areas.'
  },
  {
    title: 'Top Activities',
    content: 'Popular activities include hiking, exploring rock carvings, attending local festivals, and picnicking by the river. Always follow environmental guidelines to preserve the valley natural beauty.'
  }
];

const VisitorGuide: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-bl from-gray-100 to-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visitor Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideSections.map((section, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default VisitorGuide;