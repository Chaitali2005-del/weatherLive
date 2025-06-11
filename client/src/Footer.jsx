import React from 'react'
import './Footer.css'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Title */}
        <div className="footer-logo-title">
          <div className="footer-logo">
            <span className="footer-icon">☁️</span>
          </div>
          <h1 className="footer-title">Weathercoach</h1>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="/Who">Home</a>
          <a href="/Climate">Climate Change</a>
          <a href="/News">News</a>
          <a href="/Map">Map</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Contact">Contact</a>
        </nav>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2022 Weathercoach. All Rights Reserved</p>
          <div className="footer-socials">
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer