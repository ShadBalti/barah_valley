// app/page.js
import Image from 'next/image';
import FeatureSection from './components/FeatureSection';
import TestimonialCard from './components/TestimonialCard';
import Attractions from './components/Attractions';
import Festivals from './components/Festivals';
import VisitorGuide from './components/VisitorGuide';
import CallToAction from './components/CallToAction';
import WeatherWidget from './components/WeatherWidget';
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, USA',
    message: 'Barah Valley is one of the most beautiful places I have ever visited. The landscapes and people are incredible!',
    imageUrl: '/images/john-doe.jpg',
  },
  {
    id: 2,
    name: 'Sana Khan',
    location: 'Karachi, Pakistan',
    message: 'A perfect place to unwind and connect with nature. I highly recommend visiting the river trails!',
    imageUrl: '/images/sana-khan.jpg',
  },
];



const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen">
      <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src='images/valley-hero.jpeg' 
                alt="Scenic view of Barah Valley" 
                layout="fill" 
                objectFit="cover" 
                quality={85} 
                className="opacity-80"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
            </div>
      
            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                Welcome to Barah Valley
              </h1>
              <p className="text-lg md:text-2xl max-w-xl mx-auto leading-relaxed drop-shadow-md">
                Experience the breathtaking beauty and rich culture of Barah Valley.
              </p>
              {/* Optional Call-to-Action Button */}
              <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-semibold shadow-md transition">
                Explore More
              </button>
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
      <Attractions />
      <Festivals />
      <VisitorGuide />
      {/* Other sections */}
      <CallToAction />
      <WeatherWidget />
    </div>
    </div>
  );
}

export default HomePage;