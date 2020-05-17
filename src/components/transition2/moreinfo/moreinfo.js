import React from "react";

import "./moreinfo.css"

import img from "../../../media/moreinfo.png"

export default () => {
  return (
    <div>
      <div className="morecontent">
      <div className="moretext">
            <h1>
            We Use Artificial Intelligence To Analyse Global News Feeds To Find The News That’s Immediately Important To You
            </h1>
    
            <p>
            Whether you’re monitoring clients or suppliers for pre-deal checks, KYC or ongoing risk management, we can provide up to the minute alerts on your clients, supply chain, even people, countries or specific events. Entities are uniquely scored on predefined or custom use cases and ranked by impact and historical weighting. Look for incidence of financial crime or non-financial risk types such as Operational Risk or Cybercrime and be alerted when you need to know. We also create entity relationships so you can see how your clients feature in news tied to others. News is filtered, ranked and aggregated, augmenting and automating your capability to review the relevant stories.
            </p>

            <button className="morebutton morebutton3">
            Demo
            </button>
        </div>

        <img src={img} alt="" className="moreimg"/>
    </div>

    </div>
  );
};