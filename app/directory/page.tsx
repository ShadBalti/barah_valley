// app/directory/page.js
import BusinessCard from '../../components/BusinessCard';

const businesses = [
  { name: 'Hotel Mountain View', description: 'Comfortable lodging with scenic views.', contact: '123-456-7890' },
  { name: 'Barah Valley Café', description: 'Local delicacies and traditional meals.', contact: '234-567-8901' },
  { name: 'Local Guide Services', description: 'Experienced guides for trekking and tours.', contact: '345-678-9012' },
];

export default function DirectoryPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Local Businesses & Services</h1>
      <div>
        {businesses.map((business, index) => (
          <BusinessCard key={index} business={business} />
        ))}
      </div>
    </div>
  );
}