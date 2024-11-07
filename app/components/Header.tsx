// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white py-4 px-6">
    <nav className="container mx-auto flex flex-wrap items-center justify-between">
      <Link href="/" className="text-2xl font-semibold hover:text-blue-400 transition duration-300">
        Barah Valley
      </Link>
      <div className="space-x-4 hidden md:flex">
        <Link href="/" className="hover:text-blue-400 transition duration-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition duration-300">
          About
        </Link>
        <Link href="/tourism" className="hover:text-blue-400 transition duration-300">
          Tourism & Attractions
        </Link>
        <Link href="/directory" className="hover:text-blue-400 transition duration-300">
          Directory
        </Link>
        <Link href="/events" className="hover:text-blue-400 transition duration-300">
          Events
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition duration-300">
          Contact
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-gray-400 hover:text-blue-400 focus:outline-none focus:text-blue-400"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  </header>
);

export default Header;