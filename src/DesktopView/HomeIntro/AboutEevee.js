import React, { useEffect, useRef, useState } from "react";
import "./aboutEevee.css";

import eevee from "../../img/eevee/eevee.png";
import eeveeGen4 from "../../img/eevee/eevee-gen4.png";
import eeveeGen5 from "../../img/eevee/eevee-gen5.gif";
import eeveeG1rb from "../../img/eevee/eevee-gen1-rb.png";
import eeveeG1y from "../../img/eevee/eevee-gen1-yellow.png";
import eeveeG2 from "../../img/eevee/eevee-gen2-gold.png";
import eeveeG3rs from "../../img/eevee/eevee-gen3-rs.png";
import eeveeG3fr from "../../img/eevee/eevee-gen3-frlg.png";
import eeveeG4hg from "../../img/eevee/eevee-gen4-hgss.png";
import eeveeG5s from "../../img/eevee/eevee-gen5-static.png";
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
 * Two entry kinds:
 *   - "sheet" = PMD SpriteCollab anim sheets (CC BY-NC, credited); front-facing
 *     idle animated via background-position stepping.
 *   - "plain" = single official sprites (Gen 4 static PNG, Gen 5 animated GIF),
 *     rendered as a scaled <img>. Official sprites © Nintendo/Game Freak.
 * Not committed; lives on v2-dev only.
 */
const MONS = [
  // Eevee variants to choose from (pmd animated + official static pixel sprites by gen)
  { name: "eevee-pmd", label: "pmd", src: eevee, fw: 24, fh: 32, frames: 2 },
  { name: "eevee-g1", label: "gen 1", src: eeveeG1rb, plain: true, dispH: 72 },
  { name: "eevee-g1y", label: "gen 1 ylw", src: eeveeG1y, plain: true, dispH: 72 },
  { name: "eevee-g2", label: "gen 2", src: eeveeG2, plain: true, dispH: 72 },
  { name: "eevee-g3", label: "gen 3", src: eeveeG3rs, plain: true, dispH: 78 },
  { name: "eevee-g3fr", label: "gen 3 frlg", src: eeveeG3fr, plain: true, dispH: 78 },
  { name: "eevee-g4", label: "gen 4", src: eeveeGen4, plain: true, dispH: 84 },
  { name: "eevee-g4hg", label: "gen 4 hgss", src: eeveeG4hg, plain: true, dispH: 84 },
  { name: "eevee-g5a", label: "gen 5 (anim)", src: eeveeGen5, plain: true, dispH: 72 },
  { name: "eevee-g5", label: "gen 5", src: eeveeG5s, plain: true, dispH: 92 },
  // evolutions (PMD animated)
  { name: "vaporeon", src: vaporeon, fw: 40, fh: 56, frames: 2 },
  { name: "jolteon", src: jolteon, fw: 32, fh: 40, frames: 2 },
  { name: "flareon", src: flareon, fw: 32, fh: 40, frames: 4 },
  { name: "espeon", src: espeon, fw: 32, fh: 48, frames: 4 },
  { name: "umbreon", src: umbreon, fw: 24, fh: 48, frames: 14 },
  { name: "leafeon", src: leafeon, fw: 32, fh: 48, frames: 6 },
  { name: "glaceon", src: glaceon, fw: 32, fh: 40, frames: 6 },
  { name: "sylveon", src: sylveon, fw: 32, fh: 48, frames: 8 },
];
const TARGET_H = 60; // display height for the PMD sheet sprites

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
        if (m.plain) return; // plain sprites animate themselves (or are static)
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
          const s = m.plain ? 1 : TARGET_H / m.fh;
          return (
            <div
              className={"eevee_cell" + (picked === m.name ? " sel" : "")}
              key={m.name}
              onClick={() => choose(m.name)}
              title={m.label || m.name}
            >
              {m.plain ? (
                <div className="eevee_view" style={{ height: m.dispH }}>
                  <img className="eevee_plain" src={m.src} alt={m.label || m.name} style={{ height: m.dispH }} />
                </div>
              ) : (
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
              )}
              <span className="eevee_name">{m.label || m.name}</span>
            </div>
          );
        })}
      </div>
      <div className="about_eevee_credit">
        pmd sprites ·{" "}
        <a href="https://sprites.pmdcollab.org" target="_blank" rel="noreferrer">
          PMD SpriteCollab
        </a>{" "}
        (CC BY-NC) · gen 4/5 sprites © Nintendo/Game Freak
      </div>
    </div>
  );
}
