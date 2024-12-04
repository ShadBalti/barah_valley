import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { 
  MapPin, Mountain, Tent, Camera, Compass, CloudRain, Wind, 
  Clock, Star, Navigation, Footprints, Layers, TreePine, 
  Bird, Binoculars, Campfire, Filter, Calendar, ChevronDown, 
  ChevronUp, Info, DollarSign, Thermometer, Sunrise, Sunset
} from 'lucide-react';

// Simulated API Data (would typically come from backend)
const MOCK_WEATHER_API = {
  temperature: -2,
  feelsLike: -7,
  humidity: 65,
  windSpeed: 15,
  sunrise: "06:15 AM",
  sunset: "06:45 PM",
  conditions: [
    { type: "Clear", chance: 60 },
    { type: "Snow Flurries", chance: 40 }
  ]
};

const PERMIT_REQUIREMENTS = [
  {
    name: "Trekking Permit",
    cost: 50,
    validity: "1 Month",
    requiredDocuments: [
      "Passport Copy",
      "Medical Fitness Certificate",
      "Travel Insurance"
    ]
  },
  {
    name: "Photography Permit",
    cost: 75,
    validity: "2 Weeks",
    requiredDocuments: [
      "Professional Camera Details",
      "Expedition Purpose Letter"
    ]
  }
];

const ATTRACTIONS = [
  {
    id: 1,
    name: "Barah Alpine Meadows",
    description: "Expansive high-altitude grasslands",
    difficulty: ["Easy", "Moderate"],
    bestSeasons: ["Summer", "Early Autumn"],
    elevation: 4200,
    requiredGear: ["Hiking Boots", "Layered Clothing", "Water Purifier"],
    pricingTiers: [
      { type: "Basic Guided Tour", price: 150 },
      { type: "Photography Expedition", price: 250 },
      { type: "Extended Camping", price: 350 }
    ]
  },
  // ... other attractions
];

const BarahBroqPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [weatherData, setWeatherData] = useState(MOCK_WEATHER_API);
  
  // Advanced Filtering States
  const [filterDifficulty, setFilterDifficulty] = useState<string[]>([]);
  const [filterSeason, setFilterSeason] = useState<string[]>([]);

  // Memoized Filtering Logic
  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS.filter(attraction => {
      const difficultyMatch = filterDifficulty.length === 0 || 
        attraction.difficulty.some(diff => filterDifficulty.includes(diff));
      
      const seasonMatch = filterSeason.length === 0 || 
        attraction.bestSeasons.some(season => filterSeason.includes(season));
      
      return difficultyMatch && seasonMatch;
    });
  }, [filterDifficulty, filterSeason]);

  // Simulated Weather Fetch (would be real API in production)
  useEffect(() => {
    const weatherInterval = setInterval(() => {
      // Simulate small temperature variations
      setWeatherData(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() > 0.5 ? 1 : -1)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(weatherInterval);
  }, []);

  // Advanced Booking Simulation
  const [bookingStage, setBookingStage] = useState<'initial' | 'details' | 'confirm'>('initial');
  const [bookingSelection, setBookingSelection] = useState(null);

  // Permit Interaction Logic
  const [expandedPermit, setExpandedPermit] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs with Advanced Interaction */}
        <div className="mb-12 flex justify-center space-x-4 flex-wrap">
          {[
            'overview', 
            'attractions', 
            'weather', 
            'permits', 
            'booking',
            'ecology'
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 m-2 rounded-full transition duration-300 capitalize 
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Weather Dashboard */}
        {activeTab === 'weather' && (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Thermometer className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl">Temperature</h3>
                <p className="text-2xl">
                  {weatherData.temperature}°C 
                  <span className="text-sm ml-2 text-gray-500">
                    (Feels {weatherData.feelsLike}°C)
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Wind className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl">Wind</h3>
                <p className="text-2xl">{weatherData.windSpeed} km/h</p>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <Sunrise className="h-8 w-8 text-orange-500 inline-block mr-2" />
                  <span>{weatherData.sunrise}</span>
                </div>
                <div className="mt-2">
                  <Sunset className="h-8 w-8 text-purple-500 inline-block mr-2" />
                  <span>{weatherData.sunset}</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-center mb-4">Precipitation Forecast</h4>
              <div className="flex justify-center space-x-4">
                {weatherData.conditions.map((condition) => (
                  <div 
                    key={condition.type} 
                    className="bg-blue-100 p-3 rounded-lg text-center"
                  >
                    <p className="font-semibold">{condition.type}</p>
                    <p className="text-gray-600">Chance: {condition.chance}%</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Permits Section with Expandable Details */}
        {activeTab === 'permits' && (
          <section>
            {PERMIT_REQUIREMENTS.map((permit) => (
              <div 
                key={permit.name} 
                className="bg-white rounded-lg shadow-md mb-4"
              >
                <div 
                  onClick={() => setExpandedPermit(
                    expandedPermit === permit.name ? null : permit.name
                  )}
                  className="flex justify-between items-center p-6 cursor-pointer"
                >
                  <div className="flex items-center">
                    <DollarSign className="mr-4 text-green-600" />
                    <h3 className="font-bold">{permit.name}</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4">Cost: ${permit.cost}</span>
                    {expandedPermit === permit.name ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                {expandedPermit === permit.name && (
                  <div className="p-6 bg-blue-50">
                    <h4 className="font-semibold mb-2">Required Documents:</h4>
                    <ul className="list-disc pl-5">
                      {permit.requiredDocuments.map((doc) => (
                        <li key={doc}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Advanced Attractions with Filtering */}
        {activeTab === 'attractions' && (
          <section>
            <div className="flex justify-center mb-6 space-x-4">
              <div>
                <label className="block mb-2">Difficulty</label>
                <select 
                  multiple
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
                    setFilterDifficulty(selected);
                  }}
                  className="p-2 border rounded"
                >
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Challenging">Challenging</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Season</label>
                <select 
                  multiple
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
                    setFilterSeason(selected);
                  }}
                  className="p-2 border rounded"
                >
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Early Autumn">Early Autumn</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <div 
                  key={attraction.id} 
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold">Difficulty Levels:</h4>
                    <div className="flex space-x-2">
                      {attraction.difficulty.map((diff) => (
                        <span 
                          key={diff} 
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                        >
                          {diff}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pricing Tiers:</h4>
                    {attraction.pricingTiers.map((tier) => (
                      <div 
                        key={tier.type} 
                        className="flex justify-between mt-2"
                      >
                        <span>{tier.type}</span>
                        <span className="font-bold">${tier.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Booking Section */}
        {activeTab === 'booking' && (
          <section className="bg-white rounded-xl p-8 shadow-lg">
            {bookingStage === 'initial' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Book Your Barah Broq Experience
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {ATTRACTIONS.map((attraction) => (
                    <div 
                      key={attraction.id}
                      className="border p-4 rounded hover:shadow-lg cursor-pointer"
                      onClick={() => {
                        setBookingSelection(attraction);
                        setBookingStage('details');
                      }}
                    >
                      <h3 className="font-bold">{attraction.name}</h3>
                      <p>Select Experience</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {bookingStage === 'details' && bookingSelection && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {bookingSelection.name} - Booking Details
                </h2>
                {/* Booking form would go here */}
                <button 
                  onClick={() => setBookingStage('confirm')}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Proceed to Confirmation
                </button>
              </div>
            )}

            {bookingStage === 'confirm' && (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Booking Confirmation
                </h2>
                <p>Your booking is being processed</p>
              </div>
            )}
          </section>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Explore the Untouched Wilderness
          </h3>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full 
            hover:bg-blue-700 transition duration-300 
            transform hover:-translate-y-1 shadow-lg">
            Start Your Journey
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BarahBroqPage;