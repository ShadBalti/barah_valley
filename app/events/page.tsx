
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
    <div style={{ padding: '20px' }}>
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default EventsPage;
