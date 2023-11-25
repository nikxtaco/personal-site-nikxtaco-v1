import React, {useState, useEffect} from "react";

import "./projects.css"

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
      <div id="projects" className="main_projects_container" style={{maxHeight:"100vh"}}>
        <div className="buildingart_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">
            Projects
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            will be listed here someday
          </h2>
          <h2 className="hey_desc_mobile">
            until then, settle for
          </h2>
        </div>

        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer">
        <div className="about_button_mobile">
          GITHUB
        </div>
        </a>

      </div>


    </div>
  );
};