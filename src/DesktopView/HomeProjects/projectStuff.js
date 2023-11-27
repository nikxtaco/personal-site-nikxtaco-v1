import React from 'react';
import "./projects.css"
import UseAnimations from "react-useanimations";

import FilterBubbleMockup from "../../img/projects/FilterBubbleMockup.png"
import AlrtAIMockup from "../../img/projects/AlrtAIMockup.png"

const ProjectStuff = () => {
    const images = [
      [FilterBubbleMockup, 'https://github.com/DSC-QGambit'], 
      [AlrtAIMockup, 'https://github.com/nikxtaco/alrtai-landing']
    ]

  return (
    <div className="iframe-container">
      {Object.entries(images).map(([title, path]) => (
        <div key={path}>
        <div>
          <img className='iframe-projects-item'
            src={path[0]}
            alt={title}
          />
          <a href={path[1]} target="_blank" rel="noreferrer">
                <UseAnimations animationKey="github" size={"3vmin"} style={{ float: 'left',  marginLeft: '-15.5vw', paddingTop: '17vw', color: 'white' }}/>
            </a>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStuff;
