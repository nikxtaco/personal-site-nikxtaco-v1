import React, {useState, useEffect} from "react";

import "./art.css"

// import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Intro() {

  const { height } = useWindowDimensions();

  const [about] = useState(false);

  useEffect(() => {
    if(about===true)
    {
        window.scrollTo({top:height,left:0})
        console.log(height)
    }
  }, [about, height])

  const customSummary = {
    width:"80vw",
    height:"1px",
    marginLeft: "10vw",
    marginBottom:"5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  }

  return (
    <div>
      <div id="art" className="main_art_container" >
        <div className="dancergirl_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">
            Music
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            i sometimes make covers
          </h2>
          <h2 className="hey_desc_mobile">
            on the keyboard
          </h2>
        </div>

        <a href="https://soundcloud.app.goo.gl/ERQcF" target="_blank" rel="noreferrer">
        <div className="about_button_mobile">
          SOUNDCLOUD
        </div>
        </a>


      </div>


    </div>
  );
};