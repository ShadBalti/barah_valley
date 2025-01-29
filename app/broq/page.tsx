"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

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

const PERMIT_REQUIREMENTS = [
  {
    name: "Trekking Permit",
    cost: 50,
    validity: "1 Month",
    requiredDocuments: ["Passport Copy", "Medical Fitness Certificate", "Travel Insurance"],
  },
  {
    name: "Photography Permit",
    cost: 75,
    validity: "2 Weeks",
    requiredDocuments: ["Professional Camera Details", "Expedition Purpose Letter"],
  },
];

type Attraction = {
  id: number;
  name: string;
  description: string;
  difficulty: string[];
  bestSeasons: string[];
  elevation: number;
  requiredGear: string[];
  pricingTiers: { type: string;price: number } [];
};

const ATTRACTIONS: Attraction[] = [
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
      { type: "Extended Camping", price: 350 },
    ],
  },
];

const BarahBroqPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState < string > ("overview");
  const [selectedAttraction, setSelectedAttraction] = useState < Attraction | null > (null);
  const [weatherData, setWeatherData] = useState(MOCK_WEATHER_API);

  const [filterDifficulty, setFilterDifficulty] = useState < string[] > ([]);
  const [filterSeason, setFilterSeason] = useState < string[] > ([]);

  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS.filter((attraction) => {
      const difficultyMatch =
        filterDifficulty.length === 0 || attraction.difficulty.some((diff) => filterDifficulty.includes(diff));
      const seasonMatch =
        filterSeason.length === 0 || attraction.bestSeasons.some((season) => filterSeason.includes(season));
      return difficultyMatch && seasonMatch;
    });
  }, [filterDifficulty, filterSeason]);

  useEffect(() => {
    const weatherInterval = setInterval(() => {
      setWeatherData((prev) => ({
        ...prev,
        temperature: prev.temperature + (Math.random() > 0.5 ? 1 : -1),
      }));
    }, 30000);

    return () => clearInterval(weatherInterval);
  }, []);

  const [bookingStage, setBookingStage] = useState < "initial" | "details" | "confirm" > ("initial");
  const [bookingSelection, setBookingSelection] = useState < Attraction | null > (null);

  const [expandedPermit, setExpandedPermit] = useState < string | null > (null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-12 flex justify-center space-x-4 flex-wrap">
          {["overview", "attractions", "weather", "permits", "booking", "ecology"].map((tab) => (
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

        {/* Permits */}
        {activeTab === "permits" && (
          <section>
            {PERMIT_REQUIREMENTS.map((permit) => (
              <div key={permit.name} className="bg-white rounded-lg shadow-md mb-4">
                <div
                  onClick={() => setExpandedPermit(expandedPermit === permit.name ? null : permit.name)}
                  className="flex justify-between items-center p-6 cursor-pointer"
                >
                  <h3 className="font-bold">{permit.name}</h3>
                  <span>Cost: ${permit.cost}</span>
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

        {/* Attractions */}
        {activeTab === "attractions" && (
          <section>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <div key={attraction.id} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <h4 className="font-semibold">Difficulty:</h4>
                  <p>{attraction.difficulty.join(", ")}</p>
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