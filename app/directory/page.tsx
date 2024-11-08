// app/directory/page.tsx
'use client';
import React, { useState } from 'react';
import BusinessCard from '../components/BusinessCard';

type Business = {
  id: number;
  name: string;
  description: string;
  contactInfo: string;
  mapLink ? : string;
  phone ? : string;
};

const businesses: Business[] = [
  {
    id: 1,
    name: 'Mountain Cafe',
    description: 'A cozy spot to enjoy coffee with a mountain view.',
    contactInfo: 'contact@mountaincafe.com',
    mapLink: 'https://goo.gl/maps/...',
    phone: '123-456-7890'
  },
  {
    id: 2,
    name: 'River Inn',
    description: 'Comfortable lodging near the river trail.',
    contactInfo: 'info@riverinn.com',
    mapLink: 'https://goo.gl/maps/...',
    phone: '098-765-4321'
  },
];

const DirectoryPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Local Businesses</h1>
      
      {/* Search Bar */}
      <div className="mb-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search businesses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      
      {/* Business Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No businesses found</p>
        )}
      </div>
    </div>
  );
};

export default DirectoryPage;