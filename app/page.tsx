// app/page.js
import Gallery from './components/Gallery';
const HomePage: React.FC = () => {
  type ImageData = {
  id: number;
  src: string;
  alt: string;
};

const images: ImageData[] = [
  { id: 1, src: '/images/valley1.jpeg', alt: 'Beautiful valley view' },
  { id: 2, src: '/images/valley2.jpeg', alt: 'Mountain landscape' },
  { id: 3, src: '/images/valley3.jpeg', alt: 'River through valley' },
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

