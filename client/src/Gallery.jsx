import React, { useState } from 'react';
import './gallery.css';

const photos = [
  { title: 'Lightning', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 84.png' },
  { title: 'Mountain', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 85.png' },
  { title: 'Rain', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 86.png' },
  { title: 'Lightning', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 87.png' },
  { title: 'Storms On Land', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 88.png' },
  { title: 'Morbi Vel Tellus Ac Risus', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 90.png' },
  { title: 'Phasellus Ut Ex Ultrices', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 89.png' },
  { title: 'Fusce Tempor Orci', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 91.png' },
  { title: 'Sunrises And Sunsets', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 92.png' },
  { title: 'Aenean Commodo Orci', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 94.png' },
  { title: 'Rainbows, Halos & Reflections', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 93.png' },
  { title: 'Lightning', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 95.png' },
  { title: 'Lightning', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 96.png' },
  { title: 'Mountain', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 98.png' },
  { title: 'Rain', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 97.png' },
  { title: 'Lightning', location: 'India', time: '1 Year Ago', image: 'src/assets/Rectangle 99.png' },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const showPrev = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  const showNext = () => setCurrentIndex((currentIndex + 1) % photos.length);

  return (
    <div>
      <div className='gallery'>
        <h1>Gallery</h1>
      </div>

      <div className="gallery-container">
        <h2 className="gallery-title">Weather Photos Around The World</h2>
        <div className="gallery-grid">
          {photos.map((photo, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
              <img src={photo.image} alt={photo.title} className="gallery-image" />
              <div className="gallery-info">
                <h3 className="gallery-heading">{photo.title}</h3>
                <p className="gallery-meta">
                  <svg className="gallery-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zm4.95 9.45a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clipRule="evenodd" />
                  </svg>
                  {photo.location} / {photo.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-footer">
          <button className="gallery-button">Show More</button>
        </div>
      </div>

      {isOpen && (
        <div className="lightbox">
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-prev" onClick={showPrev}>&#10094;</button>
          <div className="lightbox-content">
            <img src={photos[currentIndex].image} alt={photos[currentIndex].title} className="lightbox-img" />
            <h3 className="lightbox-title">{photos[currentIndex].title}</h3>
            <p className="lightbox-meta">{photos[currentIndex].location} / {photos[currentIndex].time}</p>
          </div>
          <button className="lightbox-next" onClick={showNext}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
