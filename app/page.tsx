// app/page.js
import FeatureSection from './components/FeatureSection';
import TestimonialCard from './components/TestimonialCard';
import Attractions from './components/Attractions';
import Festivals from './components/Festivals';
import VisitorGuide from './components/VisitorGuide';
import CallToAction from './components/CallToAction';
import WeatherWidget from './components/WeatherWidget';
import LocalCuisine from './components/LocalCuisine';
import Quiz from './components/Quiz';
import HeroSection from './components/HeroSection';

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
      <HeroSection />
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
      <LocalCuisine />
      <Quiz />
      <CallToAction />
      <WeatherWidget />
    </div>
    </div>
  );
}

export default HomePage;