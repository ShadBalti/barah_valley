"use client";

import React, { useState, useEffect, useMemo } from "react";

// Simulated API Data
const MOCK_WEATHER_API = {
  temperature: -2,
  feelsLike: -7,
  humidity: 65,
  windSpeed: 15,
  sunrise: "06:15 AM",
  sunset: "06:45 PM",
  conditions: [
    { type: "Clear", chance: 60 },
    { type: "Snow Flurries", chance: 40 },
  ],
};

const ATTRACTIONS = [
  {
    id: 1,
    name: "Barah Alpine Meadows",
    description: "Expansive high-altitude grasslands",
    difficulty: ["Easy", "Moderate"],
    bestSeasons: ["Summer", "Early Autumn"],
    elevation: 4200,
    requiredGear: ["Hiking Boots", "Layered Clothing", "Water Purifier"],
  },
];

const BarahBroqPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [weatherData, setWeatherData] = useState(MOCK_WEATHER_API);

  const filteredAttractions = useMemo(() => ATTRACTIONS, []);

  useEffect(() => {
    const weatherInterval = setInterval(() => {
      setWeatherData((prev) => ({
        ...prev,
        temperature: prev.temperature + (Math.random() > 0.5 ? 1 : -1),
      }));
    }, 30000);

    return () => clearInterval(weatherInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-12 flex justify-center space-x-4 flex-wrap">
          {["overview", "attractions", "weather"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 m-2 rounded-full transition duration-300 capitalize 
                ${activeTab === tab ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800 hover:bg-blue-200"}`}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Weather Dashboard */}
        {activeTab === "weather" && (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-xl">Temperature</h3>
                <p className="text-2xl">
                  {weatherData.temperature}°C{" "}
                  <span className="text-sm ml-2 text-gray-500">(Feels {weatherData.feelsLike}°C)</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-xl">Wind</h3>
                <p className="text-2xl">{weatherData.windSpeed} km/h</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Sunrise: {weatherData.sunrise}</p>
                <p>Sunset: {weatherData.sunset}</p>
              </div>
            </div>
          </section>
        )}

        {/* Attractions */}
        {activeTab === "attractions" && (
          <section>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <div key={attraction.id} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Explore the Untouched Wilderness</h3>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300">
            Start Your Journey
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BarahBroqPage;