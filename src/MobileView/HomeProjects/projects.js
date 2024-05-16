import React, {useState, useEffect} from "react";

import "./projects.css"

import useWindowDimensions from "../../helpers/WindowDimensions.js"
import ProjectStuff from './projectStuff';
import UseAnimations from "react-useanimations";

import Footer from "../../components/footer/footer.js"


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
      <div id="projects" className="main_projects_container">

        <div className="buildingart_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">
            Projects
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            Sometimes,
          </h2>
          <h2 className="hey_desc_mobile">
            I code.
          </h2>
        </div>

        <a href="#projects_stuff">
        <div className="about_button_mobile2">
          BROWSE
        </div>
        </a>

        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer">
        <div className="about_button_mobile2">
          GITHUB
        </div>
        </a>

      </div>

      {/* THE PROJECTS STUFF BELOW THE MAIN PROJECTS INTRO PAGE */}

      <div id="projects_stuff" className="projects_container" >

        <div className="projects_all_content">

            <h3 className="projects_heading">
            - PROJECTS
            </h3>

            <h1 className="projects_title1">
            Mockups
            <span>
                <a href="#projects">
                    <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right", marginRight:"0vw" }}/>
                </a>
            </span>
            </h1> 

            <br/><br/><br/>

            <ProjectStuff />

            <br/><br/><br/>

            <div className="about_heading">
              This is all for now! Others on github will be added here at some point.
            </div>

            <br/><br/><br/>
            <br/><br/><br/>

            {/* <Footer/> */}

        </div>

      </div>

    </div>
  );
};