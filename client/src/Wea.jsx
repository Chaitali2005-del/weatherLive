import React from "react";
import "./Wea.css";

import bgShape from "/src/assets/Rectangle.png";
import card1 from "/src/assets/Grouup.png";
import card2 from "/src/assets/Grou.png";

const Wea = () => {
  return (
    <div className="wea-container">
      {/* LEFT */}
      <div className="wea-left">
        <img src={bgShape} className="wea-bg" alt="Background blob" />
        <img src={card1} className="wea-card wea-card--top" alt="Weather Card 1" />
        <img src={card2} className="wea-card wea-card--bottom" alt="Weather Card 2" />
      </div>

      {/* RIGHT */}
      <div className="wea-right">
        <h2 className="wea-title">
          Weather In Your Pocket<br />
          <span>Directly From Your Phone</span>
        </h2>
        <p className="wea-text">
          The forecast for today is sunny and bright, with a high of 68 degrees.
          Enjoy the beautiful weather and make sure to wear sunscreen. The forecast
          for today is sunny and bright, with a high of 68 degrees. Enjoy the
          beautiful weather and make sure to wear sunscreen.
        </p>
        <p className="wea-text">
          The forecast for today is sunny and bright, with a high of 68 degrees.
          Enjoy the beautiful weather and make sure to wear sunscreen.
        </p>
      </div>
    </div>
  );
};

export default Wea;
