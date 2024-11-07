// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tourism">Tourism</Link>
        <Link href="/directory">Directory</Link>
        <Link href="/events">Events</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}