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
            Research & Projects
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            I code,
          </h2>
          <h2 className="hey_desc_mobile">
            sometimes.
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
            - RESEARCH & PROJECTS
            </h3>

            <h1 className="projects_title1">
            Research
            </h1>

            <div className="projects_content">
              <h2 className="research_paper_title">The Model Organism Lottery: Model Organism Interpretability Strongly Depends on Training Methodology</h2>
              <p className="research_meta">Andrzej Szablewski*, Gabriel Konar-Steenberg*, Raffaello Fornasiere*, <strong>Nikita Menon</strong>*, Stefan Heimersheim</p>
              <p className="research_note">* Equal contribution</p>
              <div className="research_venue_row">
                <p className="research_venue">ICML 2026 Mechanistic Interpretability Workshop</p>
                <div className="research_links">
                  <a href="https://arxiv.org/abs/2607.01033" target="_blank" rel="noreferrer" title="Paper (arXiv)" aria-label="Paper (arXiv)">
                    <UseAnimations animationKey="download" size={"4vmin"} style={{ color: "#1a1a1a", cursor: "pointer" }}/>
                  </a>
                  <a href="https://www.lesswrong.com/posts/frvmrrND28SxZnkEy/the-model-organism-lottery-model-organism-interpretability" target="_blank" rel="noreferrer" title="LessWrong post" aria-label="LessWrong post">
                    <UseAnimations animationKey="bookmark" size={"4vmin"} style={{ color: "#1a1a1a", cursor: "pointer" }}/>
                  </a>
                  <a href="https://x.com/nikxtaco/status/2081786321698177286?s=20" target="_blank" rel="noreferrer" title="Twitter thread" aria-label="Twitter thread">
                    <UseAnimations animationKey="twitter" size={"4vmin"} style={{ color: "#1a1a1a", cursor: "pointer" }}/>
                  </a>
                </div>
              </div>
            </div>

            <br/><br/><br/>

            <h1 className="projects_title1">
            Mockups
            <span>
                <a href="#projects">
                    <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", float: "right", marginRight:"0vw" }}/>
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