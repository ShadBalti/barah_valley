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
    <div className="py-10 px-4 bg-gray-50">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Local Businesses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
    </div>
  );
};

export default DirectoryPage;