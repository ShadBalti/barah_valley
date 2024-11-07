import React from 'react';
import Image from 'next/image';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="absolute inset-0 w-full h-full opacity-50 overflow-hidden rounded-lg">
    {images.map((image) => (
      <Image
        key={image.id}
        src={image.src}
        alt={image.alt}
        layout="fill" // Covers the entire container
        objectFit="cover" // Ensures image covers container without distortion
        className="absolute inset-0"
      />
    ))}
  </div>
);

export default Gallery;