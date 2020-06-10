import React from "react";
import Navbar from "../../components/transition1/navbar/navbar.js"

import "./transition1.css"

import UseAnimations from "react-useanimations";

export default () => {
  return (
    <div>
      <Navbar/>

    <div className="main_container">
      <h1 className="main_text">
        Hey there! <br/>
        I'm Nikita.
      </h1>

      <h4 className="home_text_red">
        Let's start with this.
      </h4>

      <h2 className="home_text_big">
      Dogstudio is a multidisciplinary
      creative studio at the intersection
      of art, design and technology.
      Our goal is to deliver amazing experiences that make
      people talk, and build strategic value for brands, tech,
      entertainment, arts & culture.
      </h2>

      <h3 className="filler_text">
        So... what?
      </h3>

      <h5 className="home_text_small">
      Dogstudio is a multidisciplinary
      creative studio at the intersection
      of art, design and technology.
      Our goal is to deliver amazing experiences that make
      people talk, and build strategic value for brands, tech,
      entertainment, arts & culture.
      <br/><br/>
      Dogstudio is a multidisciplinary
      creative studio at the intersection
      of art, design and technology.
      Our goal is to deliver amazing experiences that make
      people talk, and build strategic value for brands, tech,
      entertainment, arts & culture.
      </h5>

      <button className="home_button home_button_1">
        <h6 classname="home_button_text">
          Check out my projects
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
      </button>

      <h4 className="home_text_red">
        it's time to shine.
      </h4>

      <h1 className="main_text">
        Now coming to my creative side!
      </h1>

      <h5 className="home_text_small">
      ...and on that note, here's a list of things I enjoy.
      </h5>

      <h3 className="filler_text">
        Poetry and prose. <br/>
        Does it get any better than this?
      </h3>

      <button className="home_button home_button_1">
        <h6 classname="home_button_text">
        Read away
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
      </button>

      <h5 className="home_text_small">
      Yes, I know there's 
      only one item on it so it's not exactly a list but bear with me. 
      I hope to add more of them someday.
      </h5>

    </div>

{/* 
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

    </div> */}
    </div>
  );
};