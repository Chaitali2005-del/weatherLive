import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Local weather icons (replace with correct paths)
import sunCloud from "/src/assets/suncloud.png";
import rainThunder from "/src/assets/thunder.png";
import moonCloud from "/src/assets/moon.png";
import cloudRainImg from "/src/assets/Vector.png";
import dropletsImg from "/src/assets/Vect.png";

const getIconByDescription = (desc) => {
  const lower = desc.toLowerCase();
  if (lower.includes("thunder")) return rainThunder;
  if (lower.includes("rain")) return rainThunder;
  if (lower.includes("cloud") && lower.includes("night")) return moonCloud;
  if (lower.includes("cloud")) return sunCloud;
  if (lower.includes("clear")) return sunCloud;
  return sunCloud; // default fallback
};

const ForecastCard = () => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = 'Surat';

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/weather/forecast?city=${city}`);
        setForecastData(res.data);
      } catch (err) {
        console.error("Error fetching forecast:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchForecast();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading 4-day forecast for {city}...</p>;
  if (!forecastData) return <p className="text-center text-red-500">Failed to load forecast.</p>;

  return (
    <div className="max-w-screen-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Forecast in {forecastData.city}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {forecastData.forecast.map((day) => (
          <div
            key={day.date}
            className="group bg-white rounded-2xl shadow-md p-6 text-center space-y-4 w-full transition-colors duration-200 hover:bg-blue-500 hover:text-white"
          >
            <img
              src={getIconByDescription(day.desc)}
              alt={day.desc}
              className="w-20 h-20 mx-auto"
            />
            <div className="text-xs flex justify-center gap-3">
              <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full transition-colors duration-200 group-hover:bg-white group-hover:text-blue-500">
                {new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}
              </span>
              <span className="bg-pink-100 text-gray-800 px-2 py-0.5 rounded-full transition-colors duration-200 group-hover:bg-white group-hover:text-blue-500">
                {new Date(day.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex justify-center items-center gap-x-5">
              <span className="text-2xl font-semibold">{day.temp}</span>
              <span className="text-xl">{day.feels_like}</span>
            </div>
            <div className="text-xs flex justify-center gap-3">
              <img src={cloudRainImg} alt="Wind" className="w-6 h-6" />
              <span className="text-sm">{day.wind}</span>
              <img src={dropletsImg} alt="Humidity" className="w-6 h-6" />
              <span className="text-sm">{day.humidity}</span>
            </div>
            <p className="text-xl capitalize">{day.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;