'use client';
// components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 shadow-md fixed w-full z-50 mb-6">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            Barah Valley
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-yellow-200 transition duration-300">
            Home
          </Link>
           <Link href="/about" className="text-white hover:text-yellow-200 transition duration-300">
            About 
          </Link>
          <Link href="/tourism" className="text-white hover:text-yellow-200 transition duration-300">
            Tourism
          </Link>
          <Link href="/events" className="text-white hover:text-yellow-200 transition duration-300">
            Events
          </Link>
          <Link href="/directory" className="text-white hover:text-yellow-200 transition duration-300">
            Directory
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-200 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-500 text-white">
          <Link href="/" className="block py-2 px-4 hover:bg-green-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
           <Link href="/about" className="block py-2 px-4 hover:bg-green-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/tourism" className="block py-2 px-4 hover:bg-green-600" onClick={() => setIsOpen(false)}>
            Tourism
          </Link>
          <Link href="/events" className="block py-2 px-4 hover:bg-green-600" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Link href="/directory" className="block py-2 px-4 hover:bg-green-600" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-green-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;