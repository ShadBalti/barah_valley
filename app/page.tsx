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
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen">
      <div className="relative w-full h-96">
        <Gallery images={images} 
        className="absolute inset-0 opacity-50 rounded-lg"
       />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Barah Valley
          </h1>
          <p className="text-lg md:text-2xl">
            Experience the breathtaking beauty and rich culture of Barah Valley.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

