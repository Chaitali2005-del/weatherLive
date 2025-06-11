import React, { useEffect } from "react";
import Wea from "./Wea";
import "./Who.css";
import Card from "./Card";
import Forcard from "./Forcard";
import Recent from "./Recent";
import Weadetail from "./Wedetail";

import Necards from "./Necards";

const Who = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="who-container">
        <div className="who-text">
          <h1>Weather Forecast For Everyone</h1>
          <p>
            The Forecast For Today Is Sunny And Bright, With A High Of 68 Degrees.
            Enjoy The Beautiful Weather And Make Sure To Wear Sunscreen.
          </p>
          <button>Get Notifications</button>
        </div>

        <div className="who-animation">
          <dotlottie-player
            src="https://lottie.host/272c0666-71f0-48a5-adf8-70fa36f3d107/P8T2qgjoag.lottie"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%"}} // ✅ Fully responsive
            loop
            autoplay
          ></dotlottie-player>

        </div>
      </div>
      <Wea />
      <Card />
      <Forcard />
      <Recent />
      <Weadetail />
      <Necards />

    </>
  );
};

export default Who;
