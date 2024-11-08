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
    content: 'Popular activities include hiking, exploring rock carvings, attending local festivals, and picnicking by the river. Always follow environmental guidelines to preserve the valley’s natural beauty.'
  }
];

const VisitorGuide: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Visitor Guide</h2>
      <div className="space-y-6">
        {guideSections.map((section, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisitorGuide;