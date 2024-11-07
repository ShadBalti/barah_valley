// components/EventList.js
export default function EventList({ events }) {
  return (
    <div style={{ display: 'grid', gap: '20px', padding: '20px' }}>
      {events.map((event, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}