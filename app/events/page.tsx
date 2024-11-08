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