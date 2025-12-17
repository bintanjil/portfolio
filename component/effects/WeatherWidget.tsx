"use client";

import { useState, useEffect } from "react";
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from "lucide-react";

interface WeatherData {
  temp: number;
  condition: string;
  location: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated weather data (replace with actual API call)
    // Using OpenWeatherMap API: api.openweathermap.org/data/2.5/weather
    const fetchWeather = async () => {
      try {
        // Dhaka, Bangladesh coordinates
        const lat = 23.8103;
        const lon = 90.4125;
        
        // Simulated data for now
        setWeather({
          temp: 28,
          condition: "clear",
          location: "Dhaka, BD",
        });
        setLoading(false);
      } catch (error) {
        console.error("Weather fetch error:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "rain":
        return <CloudRain className="w-5 h-5 text-blue-400" />;
      case "snow":
        return <CloudSnow className="w-5 h-5 text-cyan-300" />;
      case "cloud":
        return <Cloud className="w-5 h-5 text-slate-400" />;
      case "wind":
        return <Wind className="w-5 h-5 text-slate-300" />;
      default:
        return <Sun className="w-5 h-5 text-yellow-400" />;
    }
  };

  if (loading) {
    return (
      <div className="fixed top-24 right-6 z-50 bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-3 shadow-xl">
        <div className="animate-pulse text-slate-400 text-sm">Loading...</div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="fixed top-24 right-6 z-50 bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-3 shadow-2xl shadow-indigo-500/20">
      <div className="flex items-center gap-3">
        {getWeatherIcon(weather.condition)}
        <div>
          <div className="text-2xl font-bold text-slate-100">{weather.temp}°C</div>
          <div className="text-xs text-slate-400">{weather.location}</div>
        </div>
      </div>
    </div>
  );
}
