import React, { useState, useRef, useEffect } from 'react';
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
    const images = [NeonGenesis, LDREdited, HPEdited, NarutoOriginal, SherlockOriginal, VForVendetta];

    const [lbIndex, setLbIndex] = useState(null); // open lightbox at this index
    const open = (i) => setLbIndex(i);
    const close = () => setLbIndex(null);
    const step = (e, dir) => {
      e.stopPropagation();
      setLbIndex((n) => (n === null ? n : (n + dir + images.length) % images.length));
    };

    // keyboard: arrow keys navigate the open lightbox, Esc closes
    useEffect(() => {
      if (lbIndex === null) return;
      const onKey = (e) => {
        if (e.key === "ArrowLeft") setLbIndex((n) => (n === null ? n : (n - 1 + images.length) % images.length));
        else if (e.key === "ArrowRight") setLbIndex((n) => (n === null ? n : (n + 1) % images.length));
        else if (e.key === "Escape") setLbIndex(null);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [lbIndex, images.length]);

    // Justified rows: each item's flex-grow/-basis is set to its aspect ratio so
    // every row fills the gallery width at a single (per-row) height; rows can
    // differ in height but always share the same width.
    const containerRef = useRef(null);
    const sizeItem = (img) => {
      const item = img.closest(".sketch_item");
      if (item && img.naturalHeight) {
        const ar = img.naturalWidth / img.naturalHeight;
        item.style.flexGrow = ar.toFixed(4);
        item.style.flexBasis = (ar * 15).toFixed(2) + "vw";
      }
    };
    useEffect(() => {
      const c = containerRef.current;
      if (!c) return;
      c.querySelectorAll(".magnifying-image").forEach((img) => {
        if (img.complete) sizeItem(img);
        else img.addEventListener("load", () => sizeItem(img), { once: true });
      });
    }, []);

  return (
    <>
    <div className="iframe-container" ref={containerRef}>
      {images.map((src, i) => (
        <div key={i} className="sketch_item">
        <div className="magnifying-image-container">
          <img
            src={src}
            alt={`sketch ${i + 1}`}
            className="magnifying-image"
            style={{ cursor: "pointer" }}
            onLoad={(e) => sizeItem(e.currentTarget)}
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
          src={images[lbIndex]}
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
