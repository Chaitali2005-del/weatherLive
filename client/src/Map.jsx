import React from 'react';
import './Map.css';
import { Link } from 'react-router-dom';

const countries = [
  { name: 'India', image: '/assets/Group 105.svg' },
  { name: 'Germany', image: '/assets/Group 107.svg' },
  { name: 'Denmark', image: '/assets/Denmark.png' },
  { name: 'France', image: '/assets/Group.svg' },
  { name: 'Poland', image: '/assets/Group (1).svg' },
  { name: 'Switzerland', image: '/assets/Group (2).svg' },
  { name: 'Netherland', image: '/assets/Group 104.svg' },
  { name: 'New York', image: '/assets/Group 108.svg' },
  { name: 'London', image: '/assets/Group 106.svg' },
];

const countries1 = [
  { name: 'India', image: '/assets/Group 105.svg' },
  { name: 'Germany', image: '/assets/Group 107.svg' },
  { name: 'Denmark', image: '/assets/Denmark.png' },
  { name: 'France', image: '/assets/Group.svg' },
  { name: 'Poland', image: '/assets/Group (1).svg' },
  { name: 'Switzerland', image: '/assets/Group (2).svg' },
  { name: 'Netherland', image: '/assets/Group 104.svg' },
  { name: 'New York', image: '/assets/Group 108.svg' },
  { name: 'London', image: '/assets/Group 106.svg' },
];


const countries2 = [
  { name: 'India', image: '/assets/Group 105.svg' },
  { name: 'Germany', image: '/assets/Group 107.svg' },
  { name: 'Denmark', image: '/assets/Denmark.png' },
  { name: 'France', image: '/assets/Group.svg' },
  { name: 'Poland', image: '/assets/Group (1).svg' },
  { name: 'Switzerland', image: '/assets/Group (2).svg' },
  { name: 'Netherland', image: '/assets/Group 104.svg' },
  { name: 'New York', image: '/assets/Group 108.svg' },
  { name: 'London', image: '/assets/Group 106.svg' },
];

const maps = [
  { title: 'Temperature Map', img: '/assets/Rectangle 56.png' },
  { title: 'Cloud Map', img: '/assets/Rectangle 57.png' },
  { title: 'Wind Map', img: '/assets/Rectangle 58.png' },
];

const Map = () => {
  return (
    <div>
      <div className="map-container">
        <div className="map-background">
          <h1>Map</h1></div>
        <h1 className="heading">Europe Map Finder</h1>

        <div className="map-grid">
          {maps.map((map) => (
            <div key={map.title} className="map-card">
              <Link to="/Map_detail" >
              <img src={map.img} alt={map.title} className="map-image" /></Link>
              <div className="map-title">{map.title}</div>
            </div>
          ))}
        </div>

        <div className="country-container">
          <div className="country-grid">
            {countries.map((country) => (
              <div key={country.name} className="country-box">
                <Link to="/Map_detail" >
                <img src={country.image} alt={country.name} className="flag-img" /></Link>
                <span className="country-name">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="map-container">
        {/* <div className="map-background"></div> */}
        <h1 className="heading">Asia Map Finder</h1>

        <div className="map-grid">
          {maps.map((map) => (
            <div key={map.title} className="map-card">
              <Link to="/Map_detail" >
              <img src={map.img} alt={map.title} className="map-image" /></Link>
              <div className="map-title">{map.title}</div>
            </div>
          ))}
        </div>

        <div className="country-container">
          <div className="country-grid">
            {countries.map((country) => (
              <div key={country.name} className="country-box">
                <Link to="/Map_detail" >
                  <img src={country.image} alt={country.name} className="flag-img" />
                </Link>

                <span className="country-name">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="map-container">
        {/* <div className="map-background"></div> */}
        <h1 className="heading">Africa Map Finder</h1>

        <div className="map-grid">
          {maps.map((map) => (
            <div key={map.title} className="map-card">
              <Link to="/Map_detail" >
              <img src={map.img} alt={map.title} className="map-image" /></Link>
              <div className="map-title">{map.title}</div>
            </div>
          ))}
        </div>

        <div className="country-container">
          <div className="country-grid">
            {countries.map((country) => (
              <div key={country.name} className="country-box">
                <Link to="/Map_detail" >
                <img src={country.image} alt={country.name} className="flag-img" /></Link>
                <span className="country-name">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Map;