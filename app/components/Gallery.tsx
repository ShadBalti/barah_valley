'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full h-full">
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-full h-48 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => openImageModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-semibold"
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={800}
              className="rounded-lg shadow-xl"
            />
            <div className="mt-4 text-center text-lg text-gray-700">{selectedImage.alt}</div>
          </div>
        </div>
      )}

      {/* Fading Overlay */}
      {selectedImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
    </div>
  );
};

export default Gallery;
