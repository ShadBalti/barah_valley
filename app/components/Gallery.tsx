// components/Gallery.js
import Image from 'next/image';

export default function Gallery({ images }) {
  return (
    <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', padding: '20px' }}>
      {images.map((image, index) => (
        <Image key={index} src={image.src} alt={image.alt} width={200} height={150} style={{ borderRadius: '5px' }} />
      ))}
    </div>
  );
}