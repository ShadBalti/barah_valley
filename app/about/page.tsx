// components/AboutPage.tsx
import React from 'react';
import Head from 'next/head';
import ImageCarousel from '../components/ImageCarousel';
import Gallery from '../components/Gallery';

const AboutPage: React.FC = () => {
  const GalleryImage = [
    { id: 1, src: '/images/valley1.jpg', alt: 'Scenic View 1 of Barah Valley' },
    { id: 2, src: '/images/valley2.jpg', alt: 'Mountain Range in Barah Valley' },
    { id: 3, src: '/images/valley3.jpg', alt: 'Sunset in Barah Valley' },
    { id: 4, src: '/images/valley4.jpg', alt: 'Green Meadows of Barah Valley' },
    // Add more images as needed
  ];

  const images = [
    '/images/valley1.jpg',
    '/images/valley2.jpg',
    '/images/valley3.jpg'
  ];

  return (
    <>
      {/* SEO Head Component */}
      <Head>
        <title>About Barah Valley - Scenic Beauty and Rich Culture</title>
        <meta name="description" content="Explore the natural beauty, rich culture, and traditions of Barah Valley in Gilgit-Baltistan. Learn about its history, attractions, festivals, and community life." />
        <meta name="keywords" content="Barah Valley, Gilgit-Baltistan, scenic landscapes, cultural heritage, traditional festivals, Pakistan tourism, community life, attractions, hiking, festivals" />
        <meta property="og:title" content="Discover Barah Valley - A Hidden Gem in Gilgit-Baltistan" />
        <meta property="og:description" content="Dive into the rich heritage, stunning landscapes, and community-driven lifestyle of Barah Valley, a perfect destination for nature lovers and cultural explorers." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto py-12 px-6 bg-gradient-to-r from-green-400 to-blue-600 text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
          About Barah Valley
        </h1>

        {/* Image Carousel */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Discover the Scenic Beauty of Barah Valley
          </h2>
          <ImageCarousel images={images} />
        </section>

        {/* Main Introduction */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
          Barah Valley is a captivating destination in Gilgit-Baltistan, known for its breathtaking landscapes, deep-rooted cultural heritage, and vibrant community life. The valley is a sanctuary of natural beauty and traditional values, making it an ideal place for both tourists and locals looking to reconnect with the beauty of nature and the strength of community.
        </p>

        {/* Section: History */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Historical Background</h2>
          <p className="leading-relaxed text-gray-200">
            Barah Valley history is a tapestry of various cultures and traditions that have evolved over centuries. Local tales and legends add to its mystique, while ancient practices in music, dance, and the Balti language remain cherished by the people. The valley celebrates its history through annual cultural festivals and family traditions that have endured through generations.
          </p>
        </section>

        {/* Section: Attractions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Attractions and Scenic Wonders</h2>
          <p className="leading-relaxed text-gray-200">
            Barah Valley offers some of the most stunning views in Gilgit-Baltistan. From towering snow-capped peaks to serene rivers and lush meadows, it is a destination for nature lovers and adventurers alike. Popular activities include hiking scenic trails, visiting ancient rock carvings, and enjoying secluded spots for peaceful reflection.
          </p>
        </section>

        {/* Section: Culture and Traditions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Cultural Heritage and Festivals</h2>
          <p className="leading-relaxed text-gray-200">
            Culture is at the heart of Barah Valley. Traditional festivals like the harvest festival and spring celebrations are marked by music, dance, and communal gatherings. These events are a reflection of the valley's warm, community-driven lifestyle and are an incredible opportunity for visitors to experience Balti culture firsthand.
          </p>
        </section>

        {/* Section: For Local Visitors */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">A Hub for Local Visitors</h2>
          <p className="leading-relaxed text-gray-200">
            For those from surrounding areas, Barah Valley serves as a place to escape, unwind, and reconnect with their roots. Whether it is a family picnic by the river, a weekend hike to a favorite viewpoint, or participating in a community festival, Barah Valley offers a place of comfort and tradition that locals cherish.
          </p>
        </section>

        {/* Section: Community and Lifestyle */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Lifestyle and Community Living</h2>
          <p className="leading-relaxed text-gray-200">
            Life in Barah Valley moves at a slower pace, emphasizing simplicity and close connection to nature. The community is known for its hospitality, and farming plays a significant role in daily life. The fertile soil supports a variety of crops, and sustainable living practices are woven into the fabric of the valley's culture.
          </p>
        </section>

        {/* Section: Tips for Visitors */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Visitor Tips and Etiquette</h2>
          <p className="leading-relaxed text-gray-200">
            When visiting Barah Valley, it is essential to respect the environment and the customs of the local people. Dress appropriately, be mindful of cultural norms, and ask for permission before taking photographs of people. Immerse yourself in the valley's slow-paced life, taking time to appreciate the natural and cultural richness it offers.
          </p>
        </section>

        <div className="py-10 px-4">
          <h1 className="text-3xl font-semibold text-center mb-6 text-white">Explore the Beauty of Barah Valley</h1>
          <Gallery images={GalleryImage} />
        </div>

        {/* Call-to-Action (CTA) */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-white mb-4">
            Plan Your Journey to Barah Valley
          </h3>
          <p className="leading-relaxed text-gray-200 mb-6">
            Ready to experience the untouched beauty and rich traditions of Barah Valley? Start planning your visit today and explore the wonders of Gilgit-Baltistan.
          </p>
          <button className="px-6 py-3 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;