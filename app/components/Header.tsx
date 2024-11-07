import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff' }}>
    <nav>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/tourism">Tourism & Attractions</Link> | 
      <Link href="/directory">Directory</Link> | 
      <Link href="/events">Events</Link> | 
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;