// components/WeatherWidget.tsx
'use client';
import React, { useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  location: string;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_KEY = '28df265f84d5ecba474f5d0dc363c05a'; // Replace with your OpenWeatherMap API key
  const LAT = '35.5'; // Latitude for Barah Valley
  const LON = '74.6'; // Longitude for Barah Valley

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          location: data.name,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="text-gray-700">Loading weather...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <div className="flex items-center space-x-4">
        <img src={weather?.icon} alt="Weather Icon" className="w-12 h-12" />
        <div>
          <h3 className="text-lg font-bold text-gray-800">{weather?.location}</h3>
          <p className="text-gray-600 capitalize">{weather?.description}</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          {weather?.temperature}°C
        </h1>
      </div>
    </div>
  );
};

export default WeatherWidget;