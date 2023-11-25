import React from 'react';
import "./art.css"

// import HPOriginal from "../../img/sketches/HPOriginal.png";
import HPEdited from "../../img/sketches/HPEdited.png";
// import LDROriginal from "../../img/sketches/LDROriginal.jpeg";
import LDREdited from "../../img/sketches/LDREdited.jpeg";
import SherlockOriginal from "../../img/sketches/SherlockOriginal.jpeg";

const Sketches = () => {
    const images = [HPEdited, LDREdited, SherlockOriginal] //, HPOriginal, LDROriginal]

  return (
    <div className="iframe-container">
      {Object.entries(images).map(([title, path]) => (
        <div key={path}>
        <div className="magnifying-image-container">
          <img
            // src={require('../../img/sketches/cutie5.jpeg').default}
            src={path}
            alt={title}
            className='iframe-sketches-item magnifying-image'
          />
        </div>
        </div>
      ))}
    </div>
  );
};

export default Sketches;
