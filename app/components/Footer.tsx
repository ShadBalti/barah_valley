import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-8 px-6 md:px-16" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <section className="text-center sm:text-left" aria-labelledby="about">
            <h4 className="text-xl font-semibold mb-3" id="about">About Barah Valley Tourism</h4>
            <p className="text-sm text-gray-300 mb-4">
              Discover the beauty and culture of Barah Valley, an untouched gem in Gilgit-Baltistan. Experience nature, heritage, and adventure like never before.
            </p>
            <nav aria-labelledby="social-links">
              <h5 className="sr-only" id="social-links">Follow Us</h5>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-600 transition duration-300">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-blue-400 transition duration-300">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-500 transition duration-300">
                  Instagram
                </a>
              </div>
            </nav>
          </section>

          {/* Newsletter Subscription Section */}
          <section className="text-center sm:text-left" aria-labelledby="newsletter">
            <h4 className="text-xl font-semibold mb-3" id="newsletter">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4" aria-label="Subscribe to newsletter">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="p-3 rounded-lg text-black"
                required
                aria-label="Enter email for newsletter"
              />
              <button type="submit" className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300">
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {isSubscribed && <p className="text-sm text-green-400 mt-2">Thank you for subscribing!</p>}
          </section>

          {/* Quick Links Section */}
          <section className="text-center sm:text-left" aria-labelledby="quick-links">
            <h4 className="text-xl font-semibold mb-3" id="quick-links">Quick Links</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-gray-200 transition duration-300" aria-label="Learn more about Barah Valley">About</a>
              </li>
              <li>
                <a href="/tourism" className="hover:text-gray-200 transition duration-300" aria-label="Tourism and attractions in Barah Valley">Attractions</a>
              </li>
              <li>
                <a href="/events" className="hover:text-gray-200 transition duration-300" aria-label="Events and activities in Barah Valley">Activities</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200 transition duration-300" aria-label="Contact information for Barah Valley">Contact</a>
              </li>
            </ul>
          </section>
        </div>

        {/* Address and Location */}
        <section className="text-center mt-8 sm:text-left" aria-labelledby="location">
          <h4 className="text-xl font-semibold mb-3" id="location">Visit Us</h4>
          <p className="text-sm text-gray-300">
            Barah Valley, Gilgit-Baltistan, Pakistan
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
            aria-label="View Barah Valley location on Google Maps"
          >
            View on Google Maps
          </a>
        </section>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mt-8">
          <a href="#top" className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition duration-300" aria-label="Scroll back to top">
            &#8593; Back to Top
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8" aria-labelledby="copyright">
          <p className="text-sm text-gray-400" id="copyright">&copy; 2024 Barah Valley Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;