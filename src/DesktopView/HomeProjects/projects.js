import React, {useState} from "react";
import "./projects.css"
// import useWindowDimensions from "../../helpers/WindowDimensions.js"
import UseAnimations from "react-useanimations";
import ProjectStuff from './projectStuff';
import Writings from '../HomeBlo/Writings';
import { RESEARCH } from '../HomeBlo/writingsData';

export default function Projects() {

  // const { height } = useWindowDimensions();

    const [summaryColor1, setSummaryColor1] = useState(0);
    const [summaryColor2, setSummaryColor2] = useState(0);

    const customSummary1 = {
      width:"16vw",
      height:"2px",
      float:"left",
      background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: summaryColor1? "left bottom" : "right bottom",
      }

    const customSummary2 = {
      width:"16vw",
      height:"2px",
      float:"left",
      background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: summaryColor2? "left bottom" : "right bottom",
      }
  
  return (
    <div>

      <div id="projects" className="main_projects_container" >
        <div className="page_number">02</div>
        <div className="buildingart_picture"></div>

        <a href="#projects_stuff" onMouseEnter={()=>setSummaryColor1(1)} onMouseLeave={()=>setSummaryColor1(0)} className="intro_box1">
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white_bottom">Browse</h3>
              <h3 className="summary_description_white_bottom">02A</h3>
              <div style={customSummary1}></div>
            </div>
        </a>

        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer" onMouseEnter={()=>setSummaryColor2(1)} onMouseLeave={()=>setSummaryColor2(0)} className="intro_box2">
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white_bottom">Github</h3>
              <h3 className="summary_description_white_bottom">02B</h3>
              <div style={customSummary2}></div>
            </div>
        </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            I code, <br/>sometimes.
          </h1>
        </div>

      </div>

      {/* THE PROJECTS STUFF BELOW THE MAIN PROJECTS INTRO PAGE */}

      <div id="projects_stuff" className="projects_container" >

        <div className="projects_all_content">

            <h3 className="projects_heading">
            - Research & Projects
            </h3>

            <h1 className="projects_title1">
            Research
            </h1>

            <p className="research_intro">
            Below is every substantial piece of public research I've contributed to as an author so far.
            </p>

            <Writings entries={RESEARCH} showFilters={false} showAllLinks={true} backLabel="← Back to research" />

            <br/><br/><br/>

            <h1 className="projects_title1">
            Mockups
            </h1>

            <br/><br/><br/>

            <ProjectStuff />

            <br/><br/><br/>
            <br/><br/><br/>

            <div className="about_heading">
              This is all for now! Others on github will be added here at some point.
            </div>

            <br/><br/><br/>
            <br/><br/><br/>

            <div className="about_contact_links">
                <a href="#projects">
                    <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0" }}/>
                </a>
                <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                </a>
                <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
                </a>
                <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                </a>
                <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
                <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                </a>
            </div>

        </div>
    </div>
    </div>



  )
}