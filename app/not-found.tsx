// app/not-found.tsx

import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-md shadow-lg">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you\'re looking for doesn\'t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;