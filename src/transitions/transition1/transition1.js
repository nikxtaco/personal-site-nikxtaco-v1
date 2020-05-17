import React from "react";
import Globe from "../../components/transition1/globe/globe.js"
//import "../css/sections.css";
import Navbar from "../../components/transition1/navbar/navbar.js"

import "./transition1.css"

export default () => {
  return (
    <div className="transition1">
      <Navbar/>

      <div className="content">

            <h1>
            Focussed News From AI To You
            </h1>
    
            <p>
            Whether you’re monitoring clients or suppliers for pre-deal checks, KYC or ongoing risk management, we can provide up to the minute alerts on your clients, supply chain, even people, countries or specific events. Entities are uniquely scored on predefined or custom use cases and ranked by impact and historical weighting. Look for incidence of financial crime or non-financial risk types such as Operational Risk or Cybercrime and be alerted when you need to know.
            </p>

            <button className="button button1">
            Get Started
            </button>

            <button className="button button2">
            Learn More
            </button>
    
    </div>

    <div className="component first-component globe">
      <Globe/>

    </div>
    </div>
  );
};