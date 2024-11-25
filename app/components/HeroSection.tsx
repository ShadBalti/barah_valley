import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video/Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        >
          <source src="/videos/barah-valley.mp4" type="video/mp4" />
          {/* Fallback for static image */}
          <Image
            src="/images/valley-hero.jpeg"
            alt="Barah Valley Scenic View"
            layout="fill"
            objectFit="cover"
            quality={85}
            className="opacity-80"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 drop-shadow-lg animate-fade-in">
          Discover Barah Valley
        </h1>
        <p className="text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fade-in">
          Where <span className="text-blue-400">nature</span> meets <span className="text-yellow-400">culture</span>.
        </p>
        {/* Rotating Tagline */}
        <div className="text-lg md:text-2xl font-semibold text-blue-300 animate-typing">
          Scenic Beauty • Rich Culture • Adventurous Trails
        </div>
        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105 animate-bounce">
            Explore Now
          </button>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-900 rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Info Bar */}
      <div className="absolute bottom-8 w-full z-20 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 text-center text-white">
          <div className="bg-black/40 rounded-lg p-4 shadow-md w-36 animate-fade-in-up">
            <span className="text-4xl">👨‍👩‍👧‍👦</span>
            <h3 className="text-lg font-semibold mt-2">Population</h3>
            <p className="text-sm">~20,000</p>
          </div>
          <div className="bg-black/40 rounded-lg p-4 shadow-md w-36 animate-fade-in-up">
            <span className="text-4xl">🏘️</span>
            <h3 className="text-lg font-semibold mt-2">Neighborhoods</h3>
            <p className="text-sm">8 Villages</p>
          </div>
          <div className="bg-black/40 rounded-lg p-4 shadow-md w-36 animate-fade-in-up">
            <span className="text-4xl">🏔️</span>
            <h3 className="text-lg font-semibold mt-2">Elevation</h3>
            <p className="text-sm">2,800m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;