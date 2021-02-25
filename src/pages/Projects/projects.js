import React, {useEffect} from "react";
import Navbar from "../../components/navbar/navbar.js"
import Footer from "../../components/footer/footer.js"

import "./projects.css"

import UseAnimations from "react-useanimations";

// import { HashLink as HLink } from 'react-router-hash-link';

import Rellax from "rellax";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

import alrtai from "../../img/projects/alrtai.jpg"
import filterbubble from "../../img/projects/filterbubble.png"

export default () => {

  useEffect(() => {
    if(width>750)
    {
      new Rellax(".hi_animate", { // <---- Via class name
      speed: -3, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(".random_animate", { // <---- Via class name
      speed: 0, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(".hey_animate", { // <---- Via class name
      speed: -1, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(".creative_animate", { // <---- Via class name
      speed: 1, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    }
  });

  const { width } = useWindowDimensions();
  
  return (
    <div>
      <Navbar/>
    <div className="main_container">

      <h1 className="hi_text hi_animate">
        Here are some of my projects!
      </h1>

      <div className="random_animate">
      
      <img src={filterbubble} className="project_image" alt="filterbubble"></img>

      <h3 className="filler_text">
       Website For Filter Bubble.
      </h3>

      <a href="https://vigorous-ptolemy-37aad6.netlify.app/">
      <button className="home_button home_button_1 project_button">
        <h6 className="link_text">
          Visit The Site
      {
      width>750?
      <UseAnimations
      animationKey="skipForward"
      size={45}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", marginTop:"-3.5rem", paddingLeft:"10rem" }}
      />:
      <UseAnimations
      animationKey="skipForward"
      size={20}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
      }
        </h6>
      </button>
      </a>

      <img src={alrtai} className="project_image" alt="alrt.ai"></img>

      <h3 className="filler_text">
       Landing Page For alrt.ai, a UK Based Startup.
      </h3>

      <button className="home_button home_button_1" project_button>
        <h6 className="link_text">
          Visit The Site
      {
      width>750?
      <UseAnimations
      animationKey="skipForward"
      size={45}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", marginTop:"-3.5rem", paddingLeft:"10rem" }}
      />:
      <UseAnimations
      animationKey="skipForward"
      size={20}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
      }
        </h6>
      </button>

      </div>


    </div>

    <Footer />

    </div>
  );
};