// app/page.js
import Gallery from './components/Gallery';
import FeatureSection from './components/FeatureSection';
import TestimonialCard from './components/TestimonialCard';
import CallToAction from './components/CallToAction';
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, USA',
    message:
      'Barah Valley is one of the most beautiful places I have ever visited. The landscapes and people are incredible!',
    imageUrl: '/images/john-doe.jpg',
  },
  {
    id: 2,
    name: 'Sana Khan',
    location: 'Karachi, Pakistan',
    message:
      'A perfect place to unwind and connect with nature. I highly recommend visiting the river trails!',
    imageUrl: '/images/sana-khan.jpg',
  },
];



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
      <div className="relative w-full h-full">
        <Gallery images={images} />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Barah Valley
          </h1>
          <p className="text-lg md:text-2xl">
            Experience the breathtaking beauty and rich culture of Barah Valley.
          </p>
        </div>
      </div>
      <div>
      <FeatureSection />
      </div>
      <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Visitors Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
     <div>
      {/* Other sections */}
      <CallToAction />
    </div>
    </div>
  );
}

export default HomePage;

