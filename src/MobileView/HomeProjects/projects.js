import React, { useState } from "react";

import "./projects.css";

import Writings from "../../DesktopView/HomeBlo/Writings";
import { RESEARCH } from "../../DesktopView/HomeBlo/writingsData";
import ProjectStuff from "../../DesktopView/HomeProjects/projectStuff";

export default function Projects() {

  const [postOpen, setPostOpen] = useState(false);

  const customSummary = {
    width: "80vw",
    height: "1px",
    marginLeft: "10vw",
    marginBottom: "5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  };

  return (
    <div>
      <div id="projects" className="main_projects_container">

        <div className="buildingart_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">Research & Projects</h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">I code,</h2>
          <h2 className="hey_desc_mobile">sometimes.</h2>
        </div>

        <a href="#projects_stuff">
          <div className="about_button_mobile2">BROWSE</div>
        </a>
        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer">
          <div className="about_button_mobile2">GITHUB</div>
        </a>

      </div>

      <div id="projects_stuff" className="projects_container projects_m bloglist_m">
        <div className="projects_all_content">

          {!postOpen && (
            <>
              <h3 className="projects_heading">- Research & Projects</h3>
              <h1 className="projects_title1" id="research-anchor">AI Safety Research</h1>
              <p className="research_intro">
                Below is every substantial piece of public AI safety research I've contributed to as an author so far.
              </p>
            </>
          )}

          <Writings entries={RESEARCH} showFilters={false} showAllLinks={true} backLabel="← Back to research" onOpenChange={setPostOpen} />

          {!postOpen && (
            <>
              <br /><br />
              <h1 className="projects_title1">Mockups</h1>
              <p className="research_intro">
                Here's some of my web designs made on Figma! All of these do have an associated website that is actually coded up that you can find via the Github links.
              </p>
              <br />
              <ProjectStuff />
              <br /><br />
            </>
          )}

        </div>
      </div>

    </div>
  );
}
