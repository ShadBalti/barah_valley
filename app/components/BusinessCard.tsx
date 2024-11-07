import React from 'react';

type Business = {
  name: string;
  description: string;
  contactInfo: string;
};

type BusinessCardProps = {
  business: Business;
};

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
    <h3>{business.name}</h3>
    <p>{business.description}</p>
    <p>Contact: {business.contactInfo}</p>
  </div>
);

export default BusinessCard;
