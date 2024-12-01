'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import AuthButtons from './AuthButtons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route
  const { data: session } = useSession(); // Get session data

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Helper function to determine if the current path matches
  const isActive = (path: string) =>
    pathname === path
      ? 'text-yellow-300 font-semibold'
      : 'text-white hover:text-yellow-300 transition duration-300';

  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-semibold hover:text-yellow-300 transition duration-300">
          <Link href="/">Barah Valley</Link>
        </div>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className={`${isActive('/')}`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive('/about')}`}>
            About
          </Link>
          <Link href="/tourism" className={`${isActive('/tourism')}`}>
            Tourism
          </Link>
          <Link href="/events" className={`${isActive('/events')}`}>
            Events
          </Link>
          <Link href="/directory" className={`${isActive('/directory')}`}>
            Directory
          </Link>
          <Link href="/contact" className={`${isActive('/contact')}`}>
            Contact
          </Link>

          {/* Auth Buttons */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-sm font-medium text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition"
            >
              Sign Out
            </button>
          ) : (
            <AuthButtons />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-500 text-white rounded-b-lg">
          <Link
            href="/"
            className={`block py-3 px-6 hover:bg-teal-600 ${isActive('/')}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-3 px-6 hover:bg-teal-600 ${isActive('/about')}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/tourism"
            className={`block py-3 px-6 hover:bg-teal-600 ${isActive('/tourism')}`}
            onClick={() => setIsOpen(false)}
          >
            Tourism
          </Link>
          <Link
            href="/events"
            className={`block py-3 px-6 hover:bg-teal-600 ${isActive('/events')}`}
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/directory"
            className={`block py-3 px-6 hover:bg-teal-600 ${isActive('/directory')}`}
            onClick={() => setIsOpen(false)}
          >
            Directory
          </Link>
          <Link
            href="/contact"
            className={`block py-3 px-6 hover:bg-teal-600 ${isActive('/contact')}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Auth Buttons in Mobile */}
          <div className="block py-3 px-6">
            {session ? (
              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 text-sm font-medium text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition"
              >
                Sign Out
              </button>
            ) : (
              <AuthButtons />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;