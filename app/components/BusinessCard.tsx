// components/BusinessCard.js
export default function BusinessCard({ business }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
      <h3>{business.name}</h3>
      <p>{business.description}</p>
      <p>Contact: {business.contact}</p>
    </div>
  );
}