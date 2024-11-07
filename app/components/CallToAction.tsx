// components/CallToAction.tsx
import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Ready to Explore Barah Valley?</h2>
      <p className="text-lg mb-6">Book your tour now or contact us to learn more about the valley's hidden gems.</p>
      <div className="flex justify-center space-x-6">
        <Link href="/tourism">
          <a className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Explore Now
          </a>
        </Link>
        <Link href="/contact">
          <a className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
            Contact Us
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;