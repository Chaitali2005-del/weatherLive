import React, { useEffect, useState } from "react";
import sunriseImg from "/assets/sunr.png";
import sunsetImg from "/assets/suns.png";
import cloudRainImg from "/assets/vectw.png";
import dropletsImg from "/assets/vecw.png";
import { CloudSun, CloudRain, Cloud, CloudMoon } from "lucide-react";

const API_KEY = "342f06e3f0da95740ac1916d3f8ad59e";
const CITY = "Surat";

export default function WeaDetail() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    }

    async function fetchForecast() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      // Get the next 5 entries (usually 3-hour intervals)
      setForecast(data.list.slice(0, 5));
    }

    fetchWeather();
    fetchForecast();
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!weather) return <div className="text-white p-10">Loading weather data...</div>;

  const sunrise = formatTime(weather.sys.sunrise);
  const sunset = formatTime(weather.sys.sunset);
  const temperature = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const windSpeed = Math.round(weather.wind.speed * 3.6); // convert m/s to km/h
  const humidity = weather.main.humidity;

  return (
    <div
      className="relative bg-cover bg-center min-h-screen px-4 py-10 text-white mt-20"
      style={{ backgroundImage: "url('/src/assets/bgg.png')" }}
    >
      <div className="max-w-7xl mx-auto space-y-8 mt-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Today's Weather Details</h2>
          <p className="text-sm mt-2 text-gray-200">
            Live weather update for {CITY}.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex flex-wrap justify-center gap-6">
              {[{ day: "Sunrise", time: sunrise, background: sunriseImg }, { day: "Sunset", time: sunset, background: sunsetImg }].map((card, index) => (
                <div
                  key={index}
                  className="relative w-40 h-40 rounded-2xl"
                  style={{
                    backgroundImage: `url(${card.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative z-10 flex flex-col justify-center items-center h-full rounded-2xl">
                    <p className="text-xl font-medium">{card.day}</p>
                    <p className="text-3xl font-bold mt-2">{card.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-around gap-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl sm:w-100 sm:ml-25">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-6 text-white">
                  <div className="items-center gap-1">
                    <img src={cloudRainImg} alt="Wind" className="w-10 h-10" />
                    <span>Wind {windSpeed} km/h</span>
                  </div>
                  <div className="items-center gap-1">
                    <img src={dropletsImg} alt="Humidity" className="w-10 h-10" />
                    <span>Humidity {humidity}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl h-full">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-4xl font-bold">
                    {temperature}°C <span className="text-2xl">Feels Like {feelsLike}°C</span>
                  </p>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
                  {forecast.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-white min-w-[80px]"
                    >
                      <div className="mb-1">
                        {
                          item.weather[0].main.includes("Rain")
                            ? <CloudRain size={35} />
                            : item.weather[0].main.includes("Cloud")
                              ? <Cloud size={35} />
                              : <CloudSun size={35} />
                        }
                      </div>
                      <p className="font-normal">{Math.round(item.main.temp)}°C</p>
                      <p className="text-sm">{item.dt_txt.split(' ')[1].slice(0, 5)}</p>
                      <p className="text-sm text-white/80">{item.weather[0].description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-yellow-300 font-medium">News Update</p>
              </div>
              <button className="text-sm hover:underline">View Tomorrow Forecast →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
