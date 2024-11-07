// app/page.js
import Gallery from './components/Gallery';
type ImageData = {
  src: string;
  alt: string;
};

const HomePage: React.FC = () => {
  const images: ImageData[] = [
    { src: '/images/valley1.jpeg', alt: 'Beautiful valley view' },
    { src: '/images/valley2.jpeg', alt: 'Mountain landscape' },
    { src: '/images/valley3.jpeg', alt: 'River through valley' },
];
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Barah Valley</h1>
        <p>Discover the untouched beauty and rich cultural heritage of Barah Valley.</p>
        <Gallery images={images} />
      </section>
    </div>
  );
}

export default HomePage;