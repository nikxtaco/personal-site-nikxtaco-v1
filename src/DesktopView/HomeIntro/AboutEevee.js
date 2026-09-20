import React from "react";
import "./aboutEevee.css";

import eevee from "../../img/eevee/eevee-letsgo.png";

/*
 * EXPERIMENTAL: a single pixel Eevee perched on the right end of the colophon's
 * top rule. Hovering shows a styled note ("eevee") reusing the site's about_tip
 * hover-note. Credit: "Let's Go Eevee Pixelated" by StarWolff-Nyota (DeviantArt,
 * F2U) — see the Art Credits note. Not committed.
 */
export default function AboutEevee() {
  return (
    <span className="about_term about_eevee_perch">
      <img className="about_eevee_img" src={eevee} alt="eevee" />
      <span className="about_tip">eevee</span>
    </span>
  );
}
