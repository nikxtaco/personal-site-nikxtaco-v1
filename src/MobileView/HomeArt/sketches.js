import React from 'react';
import "./art.css"

// import HPOriginal from "../../img/sketches/HPOriginal.png";
import HPEdited from "../../img/sketches/HPEdited.png";
// import LDROriginal from "../../img/sketches/LDROriginal.jpeg";
import LDREdited from "../../img/sketches/LDREdited.jpeg";
import SherlockOriginal from "../../img/sketches/SherlockOriginal.jpeg";
import NarutoOriginal from "../../img/sketches/NarutoOriginal.jpeg";
import VForVendetta from "../../img/sketches/VForVendetta.jpeg";

const Sketches = () => {
    const images = [LDREdited, HPEdited, NarutoOriginal, SherlockOriginal, VForVendetta] //, HPOriginal, LDROriginal]

  return (
    <div className="iframe-container">
      {Object.entries(images).map(([title, path]) => (
        <div key={path}>
        <div className="magnifying-image-container">
          <img
            // src={require('../../img/sketches/cutie5.jpeg').default}
            src={path}
            alt={title}
            className={title<2 ? 'magnifying-image iframe-sketches-item-set1':
                title<3? 'magnifying-image iframe-sketches-item-set3': 
                title<4? 'magnifying-image iframe-sketches-item-set2':
                'magnifying-image iframe-sketches-item-set3'}
          />
        </div>
        </div>
      ))}
    </div>
  );
};

export default Sketches;
