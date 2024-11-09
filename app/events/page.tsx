'use client';

import React, { useState } from 'react';
import EventList from '../components/EventList';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
};

const events: Event[] = [
  {
    id: 1,
    title: 'Spring Festival',
    date: '2024-03-20',
    description: 'Celebrate the arrival of spring with music and dance!',
    category: 'Festival',
  },
  {
    id: 2,
    title: 'Harvest Celebration',
    date: '2024-09-15',
    description: 'Join us for a day of traditional food and performances.',
    category: 'Cultural',
  },
  {
    id: 3,
    title: 'Mountain Hiking',
    date: '2024-07-10',
    description: 'An adventurous day of hiking through Barah Valley’s scenic trails.',
    category: 'Outdoor',
  },
  {
    id: 4,
    title: 'Losar - Balti New Year',
    date: '2024-02-12',
    description: 'Celebrate the Balti New Year with traditional ceremonies, dances, and feasts.',
    category: 'Cultural',
  },
  {
    id: 5,
    title: 'Shandoor Polo Festival',
    date: '2024-06-15',
    description: 'Experience one of the highest polo events in the world, a unique blend of sports and culture.',
    category: 'Festival',
  },
  {
    id: 6,
    title: 'Traditional Balti Music Night',
    date: '2024-08-25',
    description: 'A celebration of Balti music with local musicians showcasing folk songs and instrumental performances.',
    category: 'Cultural',
  },
  {
    id: 7,
    title: 'Skiing in Barah Valley',
    date: '2024-12-15',
    description: 'Take part in Barah Valley’s exciting winter sports and enjoy skiing on pristine snow-covered slopes.',
    category: 'Outdoor',
  },
  {
    id: 8,
    title: 'Tibetan Buddhism Festival',
    date: '2024-10-05',
    description: 'A spiritual celebration with Buddhist rituals, prayers, and a chance to experience Balti Buddhist culture.',
    category: 'Cultural',
  },
  {
    id: 9,
    title: 'Balti Cuisine Festival',
    date: '2024-07-20',
    description: 'A feast of traditional Balti cuisine, including famous dishes like momos, thukpa, and apricot-based desserts.',
    category: 'Cultural',
  },
  {
    id: 10,
    title: 'Community Clean-Up Day',
    date: '2024-05-01',
    description: 'Join local residents in keeping Barah Valley clean and green through community service and eco-friendly initiatives.',
    category: 'Community',
  },
  {
    id: 11,
    title: 'Barah Valley Traditional Dance Show',
    date: '2024-09-30',
    description: 'A lively performance of traditional Balti dances and folk performances, celebrating the rich cultural heritage.',
    category: 'Festival',
  },
  {
    id: 12,
    title: 'Autumn Gathering',
    date: '2024-10-15',
    description: 'Celebrate the harvest season with local food, music, and festivities that highlight Barah Valley’s community spirit.',
    category: 'Cultural',
  },
  {
    id: 13,
    title: 'Trekking the Baltoro Glacier',
    date: '2024-08-01',
    description: 'A challenging but rewarding trek through the majestic Baltoro Glacier, leading to K2 Base Camp.',
    category: 'Outdoor',
  },
  {
    id: 14,
    title: 'Balti Folk Art Exhibition',
    date: '2024-11-10',
    description: 'A showcase of traditional Balti arts and crafts, including intricate woodwork, textiles, and paintings.',
    category: 'Cultural',
  },
  {
    id: 15,
    title: 'Barah Valley Family Picnic',
    date: '2024-06-30',
    description: 'A relaxing family event where locals and visitors can enjoy the natural beauty of Barah Valley with picnics and outdoor games.',
    category: 'Community',
  },
];

const EventsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || event.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-10 px-4 bg-white">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Upcoming Events</h1>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg mt-4 sm:mt-0 sm:ml-4 w-full sm:w-1/3"
        >
          <option value="All">All Categories</option>
          <option value="Festival">Festival</option>
          <option value="Cultural">Cultural</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>

      {/* Event List */}
      <div className="space-y-8">
        <EventList events={filteredEvents} />
      </div>
    </div>
  );
};

export default EventsPage;