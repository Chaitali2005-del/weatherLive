import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className='contact'>
            <h1>Contact</h1>
        </div>

         <div className="contact-container">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2979822874897!2d-122.44429242413873!3d37.7436029114249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e4221ed84e7%3A0xa651238c34e53545!2sGlen%20Park%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715761999999!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>

      <div className="contact-form-section">
        <h2>GET IN TOUCH</h2>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Etiam Eu
          Turpis Molestie, Dictum Est A, Mattis Tellus.
        </p>

        <div className="form-content">
          <div className="contact-illustration">
            <img src="src/assets/contactg.png" alt="Illustration" />
          </div>
          <form className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="Enter Your First Name" />
              <input type="text" placeholder="Enter Your Last Name" />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <div className="newsletter-container">
      <div className="newsletter-overlay">
        <div className="newsletter-text">
          <h2 className='h22'>
            Subscribe Our <br /> Newsletter For Weather <br /> Update
          </h2>
        </div>
        <div>
        <form className="newsletter-form">
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact