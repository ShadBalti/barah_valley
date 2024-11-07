
// app/events/page.js
import EventList from '../../components/EventList';

const events = [
  { title: 'Spring Festival', date: 'April 10, 2024', location: 'Barah Valley Square', description: 'A celebration of spring with local music and dance.' },
  { title: 'Cultural Fair', date: 'July 15, 2024', location: 'Central Park', description: 'An annual event showcasing local crafts and traditions.' },
  { title: 'Harvest Celebration', date: 'October 5, 2024', location: 'Village Grounds', description: 'Join us for a feast and festivities celebrating the harvest.' },
];

export default function EventsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
}