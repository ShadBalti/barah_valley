// components/TestimonialCard.tsx
import React from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  message: string;
  imageUrl: string;
};

const TestimonialCard: React.FC < { testimonial: Testimonial } > = ({ testimonial }) => {
      return (
        <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          {/* Quotation Icon */}
          <div className="absolute top-4 right-4 text-gray-300 text-4xl font-bold">
            &ldquo;
          </div>
    
          {/* Profile Image and Details */}
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 shadow-lg">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
    
          {/* Testimonial Message */}
          <p className="text-gray-700 italic leading-relaxed mb-4">
            {testimonial.message}
          </p>
    
          {/* Rating Stars */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-yellow-400 text-lg">&#9733;</span>
            ))}
          </div>
        </div>

      );
    };

    export default TestimonialCard;