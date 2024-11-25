// components/WeatherWidget.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = '28df265f84d5ecba474f5d0dc363c05a';
  const LOCATION = 'Barah Valley';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }

        // Define the expected API response structure
        interface ApiResponse {
          main: { temp: number; humidity: number };
          weather: { description: string; icon: string }[];
          wind: { speed: number };
        }

        const data: ApiResponse = await response.json();

        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        });

        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_URL]);

  if (loading) {
    return <p className="text-gray-600">Loading weather data...</p>;
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
      <div>
        <Image src={weather?.icon} alt={weather?.description} className="w-16 h-16" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Barah Valley Weather</h3>
        <p className="text-gray-600 capitalize">{weather?.description}</p>
        <p className="text-gray-800 font-bold">{weather?.temperature}°C</p>
        <p className="text-gray-600">Humidity: {weather?.humidity}%</p>
        <p className="text-gray-600">Wind: {weather?.windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherWidget;