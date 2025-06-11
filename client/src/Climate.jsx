import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './climate.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Climate = () => {
  const [todayWeather, setTodayWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [tempGraph, setTempGraph] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const todayRes = await axios.get('http://localhost:3001/api/weather/today?city=Surat');
        const forecastRes = await axios.get('http://localhost:3001/api/weather/forecast?city=Surat');

        setTodayWeather(todayRes.data);
        setForecast(forecastRes.data.forecast);

        // Optional mock hourly data (replace with live hourly data if needed)
        setTempGraph([
          { time: '3:00pm', temp: 32 },
          { time: '4:00pm', temp: 28 },
          { time: '5:00pm', temp: 48 },
          { time: '6:00pm', temp: 32 },
          { time: '7:00pm', temp: 28 },
          { time: '8:00pm', temp: 32 },
          { time: '9:00pm', temp: 24 },
          { time: '10:00pm', temp: 22 },
          { time: '11:00pm', temp: 20 },
          { time: '12:00am', temp: 24 },
        ]);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <div className='climate'>
        <h1>Climate Change</h1>
      </div>

      <div className="p-8 max-w-screen-lg mx-auto text-center">
        <h3 className="text-xl font-semibold mb-6">Today’s Weather Details</h3>

        {/* Location and weather */}
        {todayWeather && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center space-x-4">
              <img src={todayWeather.iconUrl} alt="Weather Icon" className="w-18 h-20" />
              <div className="text-left">
                <h2 className="text-2xl font-bold">{todayWeather.city}</h2>
                <p>{todayWeather.desc}</p>
              </div>
              <div className="text-sm mt-4 md:mt-0 flex flex-col items-start">
                <p>Temperature: {todayWeather.temp}</p>
                <p>Feels Like: {todayWeather.feels_like}</p>
                <p>Humidity: {todayWeather.humidity}</p>
                <p>Wind: {todayWeather.wind}</p>
                <p>Pressure: {todayWeather.pressure}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-left space-x-6 text-gray-400 font-medium mb-8">
          <span className="text-blue-500 border-b-2 border-blue-500 pb-1">Temperature</span>
          <span>Precipitation</span>
          <span>Wind</span>
        </div>

        {/* Line Chart */}
        <div className="mb-12 overflow-x-auto">
          <LineChart width={1000} height={300} data={tempGraph} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#e06666" dot={{ r: 4 }} />
          </LineChart>
        </div>

        {/* 4-Day Forecast */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 text-sm overflow-x-auto">
          {forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={day.iconUrl} alt="icon" className="w-10 h-10" />
              <p>{day.temp}</p>
              <p>{day.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Climate;