import React from 'react';
import "./projects.css"
import UseAnimations from "react-useanimations";

import FilterBubbleMockup from "../../img/projects/FilterBubbleMockup.webp"
import AlrtAIMockup from "../../img/projects/AlrtAIMockup.webp"

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
            loading="lazy"
            decoding="async"
          />
          <a href={path[1]} target="_blank" rel="noreferrer">
                {/* <UseAnimations animationKey="github" size={"3vmin"} style={{ float: 'left',  marginLeft: '-15.5vw', paddingTop: '17vw', color: '#1a1a1a' }}/> */}
                <UseAnimations animationKey="github" size={"3vmin"} style={{ float: 'left',  marginLeft: '50%', paddingTop: '0', color: '#1a1a1a' }}/>
            </a>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStuff;
