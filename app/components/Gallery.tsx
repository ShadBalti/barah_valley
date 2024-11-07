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
  <div className="absolute inset-0 opacity-50 rounded-lg">
    {images.map((image) => (
      <Image key={image.id} src={image.src} alt={image.alt} width={200} height={150} />
    ))}
  </div>
);

export default Gallery;