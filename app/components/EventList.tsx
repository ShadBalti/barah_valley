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
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {events.map((event) => (
      <li key={event.id} style={{ marginBottom: '15px' }}>
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.description}</p>
      </li>
    ))}
  </ul>
);

export default EventList;