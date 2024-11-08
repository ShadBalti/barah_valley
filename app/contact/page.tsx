'use client';

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState < string > ('');
  const [email, setEmail] = useState < string > ('');
  const [message, setMessage] = useState < string > ('');
  const [isSubmitted, setIsSubmitted] = useState < boolean > (false);
  const [error, setError] = useState < string > ('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required');
      return;
    }
    console.log('Form submitted', { name, email, message });
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

      {isSubmitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          <p>Your message has been sent successfully!</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;