import React, { useState } from 'react';
import "./art.css"

import NeonGenesis from "../../img/sketches/NeonGenesis.jpeg";
// import HPOriginal from "../../img/sketches/HPOriginal.png";
import HPEdited from "../../img/sketches/HPEdited.png";
// import LDROriginal from "../../img/sketches/LDROriginal.jpeg";
import LDREdited from "../../img/sketches/LDREdited.jpeg";
import SherlockOriginal from "../../img/sketches/SherlockOriginal.jpeg";
import NarutoOriginal from "../../img/sketches/NarutoOriginal.jpeg";
import VForVendetta from "../../img/sketches/VForVendetta.jpeg";

const Sketches = () => {
    // each sketch carries its own size class so ordering never changes the
    // shapes — set3 = portrait (3/4), set1/set2 = landscape (7/5)
    const images = [
      { src: NeonGenesis, cls: "iframe-sketches-item-set3" },
      { src: LDREdited, cls: "iframe-sketches-item-set1" },
      { src: HPEdited, cls: "iframe-sketches-item-set1" },
      { src: NarutoOriginal, cls: "iframe-sketches-item-set3" },
      { src: SherlockOriginal, cls: "iframe-sketches-item-set2" },
      { src: VForVendetta, cls: "iframe-sketches-item-set3" },
    ];

    const [lbIndex, setLbIndex] = useState(null); // open lightbox at this index
    const open = (i) => setLbIndex(i);
    const close = () => setLbIndex(null);
    const step = (e, dir) => {
      e.stopPropagation();
      setLbIndex((n) => (n === null ? n : (n + dir + images.length) % images.length));
    };

  return (
    <>
    <div className="iframe-container">
      {images.map(({ src, cls }, i) => (
        <div key={i}>
        <div className="magnifying-image-container">
          <img
            src={src}
            alt={`sketch ${i + 1}`}
            className={`magnifying-image ${cls}`}
            style={{ cursor: "pointer" }}
            onClick={() => open(i)}
          />
        </div>
        </div>
      ))}
    </div>

    {lbIndex !== null && (
      <div className="lb_overlay" onClick={close}>
        <button className="lb_close" onClick={close} aria-label="Close">×</button>
        <button className="lb_arrow lb_prev" onClick={(e) => step(e, -1)} aria-label="Previous image">‹</button>
        <img
          className="lb_img"
          src={images[lbIndex].src}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
        <button className="lb_arrow lb_next" onClick={(e) => step(e, 1)} aria-label="Next image">›</button>
        <div className="lb_count">{lbIndex + 1} / {images.length}</div>
      </div>
    )}
    </>
  );
};

export default Sketches;
