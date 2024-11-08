import React from 'react';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => (
  <ul className="space-y-6">
    {events.map((event) => (
      <li key={event.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
        <a href={`/events/${event.id}`} className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
          {event.title}
        </a>
        <p className="text-sm text-gray-500 mb-2">
          {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-gray-700">{event.description}</p>
      </li>
    ))}
  </ul>
);

export default EventList;