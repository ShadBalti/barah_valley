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
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    {images.map((image) => (
      <Image key={image.id} src={image.src} alt={image.alt} width={200} height={150} style={{ borderRadius: '8px' }} />
    ))}
  </div>
);

export default Gallery;