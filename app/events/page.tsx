
// app/events/page.js
import EventList from '../components/EventList';
import React from 'react';
type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
};

const events: Event[] = [
  {
    id: 1,
    title: 'Spring Festival',
    date: 'March 20, 2024',
    description: 'Celebrate the arrival of spring with music and dance!',
  },
  {
    id: 2,
    title: 'Harvest Celebration',
    date: 'September 15, 2024',
    description: 'Join us for a day of traditional food and performances.',
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="py-10 px-4 bg-white">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Upcoming Events</h1>
      <div className="space-y-8">
        <EventList events={events} />
      </div>
    </div>
  );
};

export default EventsPage;
