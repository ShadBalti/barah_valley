import React from 'react';

type Business = {
  name: string;
  description: string;
  contactInfo: string;
  mapLink?: string;
  phone?: string;
};

type BusinessCardProps = {
  business: Business;
};

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6 transform transition-transform hover:scale-105 hover:shadow-xl max-w-md mx-auto">
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{business.name}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{business.description}</p>

    {/* Contact and Map Links */}
    <div className="flex items-center space-x-4 text-gray-500 mt-4">
      {business.phone && (
        <a href={`tel:${business.phone}`} className="flex items-center space-x-2 hover:text-blue-500">
          
          <span>{business.phone}</span>
        </a>
      )}
      {business.contactInfo && (
        <a href={`mailto:${business.contactInfo}`} className="flex items-center space-x-2 hover:text-blue-500">
         
          <span>Email</span>
        </a>
      )}
      {business.mapLink && (
        <a href={business.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-500">
       
          <span>Location</span>
        </a>
      )}
    </div>
  </div>
);

export default BusinessCard;