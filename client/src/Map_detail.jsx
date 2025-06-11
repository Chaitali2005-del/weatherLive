import React from 'react'
import './map_detail.css';

const weeklyData = [
  { day: 'Sun', icon: 'src/assets/https___lottiefiles.com_73473-sunclouds.gif', temp: '12° / 2°' },
  { day: 'Mon', icon: 'src/assets/https___lottiefiles.com_73473-sunclouds.gif', temp: '12° / 2°' },
  { day: 'Tue', icon: 'src/assets/https___lottiefiles.com_73473-sunclouds.gif', temp: '12° / 2°' },
  { day: 'Wed', icon: 'src/assets/https___lottiefiles.com_22196-rain.gif', temp: '12° / 2°' },
  { day: 'Thu', icon: 'src/assets/https___lottiefiles.com_52094-cloud.gif', temp: '12° / 2°' },
  { day: 'Fri', icon: 'src/assets/https___lottiefiles.com_73473-sunclouds.gif', temp: '12° / 2°' },
  { day: 'Sat', icon: 'src/assets/https___lottiefiles.com_22196-rain.gif', temp: '12° / 2°' },
];

const Map_detail = () => {
  return (
    <div>
      <div className='map_detail'>
      <h1 className='text-white px-40 py-45 flex items-center justify-between flex-wrap font-bold text-4xl'>Map Detail</h1>
      </div>
      <div className="weather-container">
        {/* Header */}
        <div className="weather-header">
          <h2>India Weather Map</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Content */}
        <div className="weather-content">
          {/* Main Map */}
          <div className="main-map">
            <img src="src/assets/Rectangle 68.png" alt="India Map" />
          </div>

          {/* Side Maps */}
          <div className="side-maps">
            <div className="side-map">
              <img src="src/assets/Group 137.png" alt="Temperature Map" />
              <span></span>
            </div>
            <div className="side-map">
              <img src="src/assets/Group 138.png" alt="Cloud Map" />
              <span></span>
            </div>
            <div className="side-map">
              <img src="src/assets/Group 139.png" alt="Wind Map" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-container">
        <h2 className='Forecast'>India Weekly Forecast</h2>
        <div className="forecast-week">
          {weeklyData.map((item) => (
            <div className="forecast-day" key={item.day}>
              <div className="day">{item.day}</div>
              <img src={item.icon} alt={item.day} className="weather-icon" />
              <div className="temperature">{item.temp}</div>
            </div>
          ))}
        </div>
<hr /><br />
        <div className="forecast-details">
          <div className="current-weather">
            <img src="src/assets/Group 147.png" alt="Patchy Cloudy" className="weather-icon-large" />
            <div className="temperature-large">12 °C</div>
            <div className="location">📍 Mumbai</div>
            <div className="date">Sunday, May 4</div>
            <hr />
            <div className="weather-desc">☁️ Patchy Cloudy Day</div>
            <div className="moon-time">🌙 19:30</div>
          </div>

          <div className="weather-metrics">
            <div className="metric">
              <div className="title">UV Index</div>
              <img src="src/assets/Group 148.png" alt="UV" className="metric-icon" />
              <div className="value">234568</div>
            </div>
            <div className="metric">
              <div className="title">Wind Staus</div>
              <div className="value">7.70 <span>KM</span></div>
            </div>
            <div className="metric">
              <div className="title">Sunrise & Sunset</div>
              <div className="value">☀ 6:30 Am<br />🌙 6:30 Am</div>
            </div>
            <div className="metric">
              <div className="title">Humidity</div>
              <div className="value1">20%</div>
            </div>
            <div className="metric">
              <div className="title">Visibility</div>
              <div className="value1">8.9 <span>KM</span></div>
            </div>
            <div className="metric">
              <div className="title">Air Quality</div>
              <div className="value1">105</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map_detail