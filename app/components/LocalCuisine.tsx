import React from 'react';
import Image from 'next/image';

type Dish = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  recipe?: string;
};

type Eatery = {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
};

const dishes: Dish[] = [
  {
    id: 1,
    name: 'Thukpa',
    description: 'A hearty noodle soup packed with vegetables and spices, perfect for cold evenings.',
    imageUrl: '/images/Thukpa.jpg',
    recipe: 'Boil noodles, add broth, veggies, and spices. Simmer and serve hot.',
  },
  {
    id: 2,
    name: 'Momo',
    description: 'Delicious steamed dumplings filled with minced meat or vegetables.',
    imageUrl: '/images/Momo.jpeg',
    recipe: 'Prepare filling, wrap in dough, steam for 10 minutes, and serve with chutney.',
  },
  {
    id: 3,
    name: 'Skyu',
    description: 'A traditional Balti pasta stew with rich flavors of butter and veggies.',
    imageUrl: '/images/Skyu.jpeg',
  },
];

const eateries: Eatery[] = [
  { id: 1, name: 'Balti Delight', location: 'Skardu Bazaar', rating: 4.5, reviewCount: 120 },
  { id: 2, name: 'Mountain Feast', location: 'Barah Main Road', rating: 4.0, reviewCount: 95 },
  { id: 3, name: 'Valley Treats', location: 'Near Barah River', rating: 4.8, reviewCount: 80 },
];

const LocalCuisine: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Local Cuisine</h2>

      {/* Traditional Dishes */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Traditional Dishes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={dish.imageUrl} alt={dish.name} width={400} height={250} className="object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">{dish.name}</h4>
                <p className="text-gray-600 mb-2">{dish.description}</p>
                {dish.recipe && <p className="text-sm text-gray-500">Recipe: {dish.recipe}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Eateries */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Nearby Eateries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eateries.map((eatery) => (
            <div key={eatery.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800">{eatery.name}</h4>
              <p className="text-gray-600 mb-2">{eatery.location}</p>
              <p className="text-yellow-500 font-bold">
                {eatery.rating} ★ <span className="text-gray-500">({eatery.reviewCount} reviews)</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalCuisine;