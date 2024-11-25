'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GuideSection {
  title: string;
  content: string;
  imageUrl ? : string;
  mapLink ? : string;
  rating ? : number;
  comments ? : string[];
  location ? : string;
  videoLink ? : string; // Add video link for virtual tours
}

const guideSections: GuideSection[] = [
  {
    title: 'Respecting Local Culture',
    content: 'Visitors are encouraged to dress modestly, seek permission before photographing people, and be mindful of local customs...',
    imageUrl: '/images/culture.jpg',
    mapLink: 'https://www.google.com/maps?q=Barah+Valley+Cultural+Sites',
    rating: 4.5,
    comments: ['Great tips for respecting local culture!'],
    location: 'Cultural Center, Barah Valley',
    videoLink: 'https://www.youtube.com/watch?v=video1', // Add video link
  },
  {
    title: 'Safety and Preparedness',
    content: 'Pack appropriately for the mountainous terrain and changing weather. Carry essentials like water, sunscreen...',
    imageUrl: '/images/safety.jpg',
    mapLink: 'https://www.google.com/maps?q=Barah+Valley+Hiking+Trails',
    rating: 4.8,
    comments: ['This is a very helpful guide for first-time travelers!'],
    location: 'Various Trails in Barah Valley',
    videoLink: 'https://www.youtube.com/watch?v=video2', // Add video link
  },
  {
    title: 'Top Activities',
    content: 'Popular activities include hiking, exploring rock carvings, attending local festivals, and picnicking by the river...',
    imageUrl: '/images/activities.jpg',
    rating: 4.7,
    comments: ['Hiking in Barah Valley was an amazing experience!'],
    location: 'Barah Valley River and Trails',
    videoLink: 'https://www.youtube.com/watch?v=video3', // Add video link
  }
];

const VisitorGuide: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState < number | null > (null);
  const [searchQuery, setSearchQuery] = useState < string > ('');
  const [favoriteSections, setFavoriteSections] = useState < number[] > ([]);
  const [weather, setWeather] = useState < string > ('');
  const [alert, setAlert] = useState < string | null > (null);

  useEffect(() => {
    // Fetch current weather for Barah Valley (replace with actual weather API)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=BarahValley&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setWeather(data.weather[0].description))
      .catch(error => console.error('Error fetching weather data:', error));

    // Example alert notification for weather
    setAlert('Weather Alert: Heavy rainfall expected this weekend. Stay safe!');
  }, []);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const toggleFavorite = (index: number) => {
    if (favoriteSections.includes(index)) {
      setFavoriteSections(favoriteSections.filter(i => i !== index));
    } else {
      setFavoriteSections([...favoriteSections, index]);
    }
  };

  const filteredSections = guideSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-gradient-to-bl from-gray-50 to-gray-200">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Visitor Guide</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search the guide..."
          className="py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Weather Widget */}
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold text-gray-800">Current Weather: <span className="text-blue-600">{weather}</span></p>
        {alert && <p className="text-red-600 mt-2 font-medium">{alert}</p>}
      </div>

      {/* Guide Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => toggleSection(index)}
          >
            {/* Section Header */}
            <div className="relative">
              {section.imageUrl && (
                <div className="w-full h-52 overflow-hidden rounded-t-xl">
                  <Image src={section.imageUrl} alt={section.title} width={400} height={220} className="object-cover w-full h-full" />
                </div>
              )}
              <div className="absolute top-4 left-4 text-white font-semibold text-xl">{section.title}</div>
            </div>

            {/* Section Content */}
            <div className="p-6">
              {/* Rating */}
              {section.rating && (
                <div className="mb-4 flex items-center space-x-1 text-yellow-500">
                  {'★'.repeat(Math.floor(section.rating))}{' '}
                  {'☆'.repeat(5 - Math.floor(section.rating))}
                </div>
              )}

              {/* Section Details */}
              {expandedSection === index ? (
                <p className="text-gray-700">{section.content}</p>
              ) : (
                <p className="text-gray-500 truncate">{section.content}</p>
              )}

              {/* Favorite Button */}
              <button
                className={`mt-4 ${favoriteSections.includes(index) ? 'text-yellow-500' : 'text-gray-600'} hover:text-yellow-500`}
                onClick={(e) => { e.stopPropagation(); toggleFavorite(index); }}
              >
                {favoriteSections.includes(index) ? '★ Added to Favorites' : '★ Add to Favorites'}
              </button>

              {/* Location */}
              {section.location && (
                <p className="text-gray-600 italic mt-2">{`Location: ${section.location}`}</p>
              )}

              {/* Map Link */}
              {section.mapLink && (
                <div className="mt-4">
                  <a href={section.mapLink} target="_blank" className="text-blue-500 hover:underline">
                    View on Map
                  </a>
                </div>
              )}

              {/* Video Link */}
              {section.videoLink && (
                <div className="mt-4">
                  <a href={section.videoLink} target="_blank" className="text-blue-500 hover:underline">
                    Watch Virtual Tour
                  </a>
                </div>
              )}

              {/* Comments Section */}
              {section.comments && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700">User Comments</h4>
                  <ul className="list-disc pl-5">
                    {section.comments.map((comment, idx) => (
                      <li key={idx} className="text-gray-600">- {comment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisitorGuide;