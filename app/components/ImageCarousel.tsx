'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC < ImageCarouselProps > = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative group">
      {/* Image Display */}
      <div className="w-full h-96 sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Barah Valley Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#8250;
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? 'bg-blue-500 scale-110' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>

      {/* Image Caption */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-md">
        <p>{`Image ${currentIndex + 1} of ${images.length}`}</p>
      </div>
    </div>
  );
};

export default ImageCarousel;