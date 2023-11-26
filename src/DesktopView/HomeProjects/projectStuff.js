import React from 'react';
import "./projects.css"

import FilterBubbleMockup from "../../img/projects/FilterBubbleMockup.png"
// import alrtai from "../../img/projects/alrtai.jpg"

const ProjectStuff = () => {
    const images = [FilterBubbleMockup]

  return (
    <div className="iframe-container">
      {Object.entries(images).map(([title, path]) => (
        <div key={path}>
        <div>
          <img
            src={path}
            alt={title}
            className='iframe-projects-item'
          />
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStuff;
