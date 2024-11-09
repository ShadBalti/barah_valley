
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-6 px-4 md:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-2">About Barah Valley Tourism</h4>
          <p className="text-sm">
            Discover the beauty and culture of Barah Valley, an untouched gem in Gilgit-Baltistan. Experience nature, heritage, and adventure like never before.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-600">
            Facebook 
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-blue-400">
            Twitter(X)
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-500">
            Instagram
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-400" aria-label="About Barah Valley">About</a>
            </li>
            <li>
              <a href="/tourism" className="hover:text-gray-400" aria-label="Attractions">Attractions</a>
            </li>
            <li>
              <a href="/events" className="hover:text-gray-400" aria-label="Activities">Activities</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400" aria-label="Contact Us">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm">&copy; 2024 Barah Valley Tourism. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;