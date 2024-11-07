// app/tourism/page.js
'use client';

import React, { useEffect, useState } from 'react';

async function fetchTouristSpots() {
  const res = await fetch('https://api.example.com/tourist-spots'); // Replace with your API endpoint
  return res.json();
}

export default function TourismPage() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetchTouristSpots().then((data) => setSpots(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Explore Barah Valley</h1>
      <p>Discover the must-visit attractions in Barah Valley.</p>
      <ul>
        {spots.map((spot) => (
          <li key={spot.id}>
            <h2>{spot.name}</h2>
            <p>{spot.description}</p>
            <Image src={spot.imageUrl} alt={spot.name} width={400} height={250} />
          </li>
        ))}
      </ul>
    </div>
  );
}
