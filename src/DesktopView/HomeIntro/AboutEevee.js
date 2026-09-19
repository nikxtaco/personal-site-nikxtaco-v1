import React, { useEffect, useRef, useState } from "react";
import "./aboutEevee.css";

import eevee from "../../img/eevee/eevee.png";
import vaporeon from "../../img/eevee/vaporeon.png";
import jolteon from "../../img/eevee/jolteon.png";
import flareon from "../../img/eevee/flareon.png";
import espeon from "../../img/eevee/espeon.png";
import umbreon from "../../img/eevee/umbreon.png";
import leafeon from "../../img/eevee/leafeon.png";
import glaceon from "../../img/eevee/glaceon.png";
import sylveon from "../../img/eevee/sylveon.png";

/*
 * EXPERIMENTAL: a chooser row of Eevee + its evolutions above the colophon.
 * Front-facing idle animation (row 0 of each PMD anim sheet), click to pick.
 * Sprites: PMD SpriteCollab (CC BY-NC 4.0), credited below. Not committed.
 */
const MONS = [
  { name: "eevee", src: eevee, fw: 24, fh: 32, frames: 2 },
  { name: "vaporeon", src: vaporeon, fw: 40, fh: 56, frames: 2 },
  { name: "jolteon", src: jolteon, fw: 32, fh: 40, frames: 2 },
  { name: "flareon", src: flareon, fw: 32, fh: 40, frames: 4 },
  { name: "espeon", src: espeon, fw: 32, fh: 48, frames: 4 },
  { name: "umbreon", src: umbreon, fw: 24, fh: 48, frames: 14 },
  { name: "leafeon", src: leafeon, fw: 32, fh: 48, frames: 6 },
  { name: "glaceon", src: glaceon, fw: 32, fh: 40, frames: 6 },
  { name: "sylveon", src: sylveon, fw: 32, fh: 48, frames: 8 },
];
const TARGET_H = 60; // display height in px; each sprite scales to this

export default function AboutEevee() {
  const spriteRefs = useRef([]);
  const [picked, setPicked] = useState(() => {
    try { return localStorage.getItem("eevee-pick") || ""; } catch (e) { return ""; }
  });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let tick = 0;
    const id = setInterval(() => {
      tick++;
      MONS.forEach((m, i) => {
        const el = spriteRefs.current[i];
        if (el) el.style.backgroundPositionX = -((tick % m.frames) * m.fw) + "px";
      });
    }, 200);
    return () => clearInterval(id);
  }, []);

  const choose = (name) => {
    const next = picked === name ? "" : name;
    setPicked(next);
    try { localStorage.setItem("eevee-pick", next); } catch (e) {}
  };

  return (
    <div className="about_eevee">
      <div className="about_eevee_head">// pick a companion</div>
      <div className="about_eevee_row">
        {MONS.map((m, i) => {
          const s = TARGET_H / m.fh;
          return (
            <div
              className={"eevee_cell" + (picked === m.name ? " sel" : "")}
              key={m.name}
              onClick={() => choose(m.name)}
              title={m.name}
            >
              <div className="eevee_view" style={{ width: m.fw * s, height: m.fh * s }}>
                <div
                  className="eevee_sprite"
                  ref={(el) => (spriteRefs.current[i] = el)}
                  style={{
                    width: m.fw,
                    height: m.fh,
                    transform: `scale(${s})`,
                    backgroundImage: `url(${m.src})`,
                  }}
                />
              </div>
              <span className="eevee_name">{m.name}</span>
            </div>
          );
        })}
      </div>
      <div className="about_eevee_credit">
        sprites ·{" "}
        <a href="https://sprites.pmdcollab.org" target="_blank" rel="noreferrer">
          PMD SpriteCollab
        </a>{" "}
        contributors (CC BY-NC)
      </div>
    </div>
  );
}
