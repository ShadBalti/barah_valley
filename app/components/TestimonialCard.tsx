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

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.message}</p>
    </div>
  );
};

export default TestimonialCard;