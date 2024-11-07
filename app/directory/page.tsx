// app/directory/page.js
import React from 'react';
import BusinessCard from '../components/BusinessCard';

type Business = {
  id: number;
  name: string;
  description: string;
  contactInfo: string;
};

const businesses: Business[] = [
  {
    id: 1,
    name: 'Mountain Cafe',
    description: 'A cozy spot to enjoy coffee with a mountain view.',
    contactInfo: 'contact@mountaincafe.com',
  },
  {
    id: 2,
    name: 'River Inn',
    description: 'Comfortable lodging near the river trail.',
    contactInfo: 'info@riverinn.com',
  },
];

const DirectoryPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Local Businesses</h1>
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default DirectoryPage;