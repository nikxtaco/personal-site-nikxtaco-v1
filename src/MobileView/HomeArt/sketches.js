import React from 'react';
import "./art.css"

// import HPOriginal from "../../img/sketches/HPOriginal.webp";
import HPEdited from "../../img/sketches/HPEdited.webp";
// import LDROriginal from "../../img/sketches/LDROriginal.webp";
import LDREdited from "../../img/sketches/LDREdited.webp";
import SherlockOriginal from "../../img/sketches/SherlockOriginal.webp";
import NarutoOriginal from "../../img/sketches/NarutoOriginal.webp";
import VForVendetta from "../../img/sketches/VForVendetta.webp";

const Sketches = () => {
    const images = [LDREdited, HPEdited, NarutoOriginal, SherlockOriginal, VForVendetta] //, HPOriginal, LDROriginal]

  return (
    <div className="iframe-container">
      {Object.entries(images).map(([title, path]) => (
        <div key={path}>
        <div className="magnifying-image-container">
          <img
            // src={require('../../img/sketches/suika.webp').default}
            src={path}
            alt={title}
            loading="lazy"
            decoding="async"
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
