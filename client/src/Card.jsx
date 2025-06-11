import React, { useEffect, useState } from 'react';
import bgImage from "/src/assets/Reac.png";
import cloudRainImg from "/src/assets/Vector.png";
import dropletsImg from "/src/assets/Vect.png";
import cloudSunImg from "/src/assets/Group 27.png";
import "./Card.css";

const API_KEY = "ae4b63eb01eb14494ecc1e6a53bf5019";
const CITY = "San Francisco"; // You can change or make dynamic

export default function Card() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Weather fetch failed:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-2 mt-15"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 md:px-0">
        {/* Left Section */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="mx-auto md:ml-60 w-full px-4 md:px-0">
              <h2 className="text-3xl font-bold text-black">{weather?.name || "Loading..."}</h2>
              <p className="text-lg text-black">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}{" "}
                | Update As Of {new Date().toLocaleTimeString()}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row w-full max-w-sm justify-around bg-white/70 rounded-xl p-6 sm:p-10 shadow-md space-y-4 sm:space-y-0">
                {/* Weather Info Block 1 */}
                <div className="flex flex-col items-center text-gray-800">
                  <div className="flex items-center gap-1 text-sm">
                    <img src={cloudRainImg} alt="Cloud Rain" className="w-10 h-10 mt-5 mr-2" />
                    <span>
                      Wind {weather ? `${weather.wind.speed} m/s` : "--"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm mt-1">
                    <img src={dropletsImg} alt="Droplets" className="w-10 h-10 mr-5" />
                    <span>
                      Humidity {weather ? `${weather.main.humidity}%` : "--"}
                    </span>
                  </div>
                </div>

                {/* Weather Info Block 2 (optional duplicate or diff info) */}
                <div className="flex flex-col items-center text-gray-800">
                  <div className="flex items-center gap-1 text-sm">
                    <img src={cloudRainImg} alt="Cloud Rain" className="w-10 h-10 mt-5 mr-2" />
                    <span>
                      Wind {weather ? `${weather.wind.speed} m/s` : "--"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm mt-1">
                    <img src={dropletsImg} alt="Droplets" className="w-10 h-10 mr-4" />
                    <span>
                      Humidity {weather ? `${weather.main.humidity}%` : "--"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg w-[180px] sm:w-[200px] mx-auto md:ml-0">
          <img
            src={cloudSunImg}
            alt="Cloud and Sun"
            className="w-12 h-32 md:w-16 md:h-40 mb-4 object-contain"
          />
          <p className="text-2xl font-bold text-black">
            {weather ? `${Math.round(weather.main.temp)}°C` : "--"}
          </p>
          <p className="text-base text-gray-600">
            {weather ? `${Math.round(weather.main.temp_min)}°C - ${Math.round(weather.main.temp_max)}°C` : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}
