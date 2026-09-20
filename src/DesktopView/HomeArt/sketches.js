import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./art.css"

import NeonGenesis from "../../img/sketches/NeonGenesis.jpeg";
// import HPOriginal from "../../img/sketches/HPOriginal.jpg";
import HPEdited from "../../img/sketches/HPEdited.jpg";
// import LDROriginal from "../../img/sketches/LDROriginal.jpeg";
import LDREdited from "../../img/sketches/LDREdited.jpeg";
import SherlockOriginal from "../../img/sketches/SherlockOriginal.jpeg";
import NarutoOriginal from "../../img/sketches/NarutoOriginal.jpeg";
import VForVendetta from "../../img/sketches/VForVendetta.jpeg";

const Sketches = () => {
    const images = [NeonGenesis, LDREdited, HPEdited, NarutoOriginal, SherlockOriginal, VForVendetta];
    // hover notes shown in the LEFT gutter beside each sketch (desktop only).
    // Aligned to the images order; "" = no note (no box shown on hover). May
    // contain an inline <a> link.
    const notes = [
      "A collage-sketch of cyberpunk-themed scenes from Neon Genesis Evangelion, Cyberpunk Edgerunners and Blade Runner 2049, that I used AI filters to add colour to, in 2024.",
      "A collage-sketch of scenes from an episode of Love, Death and Robots, called The Very Pulse of the Machine, that I used AI filters to add colour to, in 2023.",
      "A collage-sketch of emotional scenes from Harry Potter, plus Hogwarts and its Express train, that I used AI filters to add colour to, in 2020.",
      "", "", "",
    ];

    const [lbIndex, setLbIndex] = useState(null); // open lightbox at this index

    // ---- hover note (fixed card, above the now-playing snippet; no animation) ----
    const [hovered, setHovered] = useState(null);
    const noteHtml = hovered != null ? (notes[hovered] || "") : "";
    const noteOpen = hovered != null && !!noteHtml;
    const openNote = (i) => { if (notes[i]) setHovered(i); };
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
        <div
          key={i}
          className="sketch_item"
          onMouseEnter={notes[i] ? () => openNote(i) : undefined}
          onMouseLeave={notes[i] ? () => setHovered(null) : undefined}
        >
        <div className="magnifying-image-container">
          <img
            src={src}
            alt={`sketch ${i + 1}`}
            className="magnifying-image"
            loading="lazy"
            decoding="async"
            style={{ cursor: "pointer" }}
            onLoad={(e) => sizeItem(e.currentTarget)}
            onClick={() => open(i)}
          />
        </div>
        </div>
      ))}
    </div>

    {noteOpen && ReactDOM.createPortal(
      <div className="sketch_note">
        <div className="sketch_note_text" dangerouslySetInnerHTML={{ __html: noteHtml }} />
      </div>,
      document.body
    )}

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
