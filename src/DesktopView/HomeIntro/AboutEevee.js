import React from "react";
import "./aboutEevee.css";

import eevee from "../../img/eevee/eevee-letsgo.png";

/*
 * EXPERIMENTAL: a single pixel Eevee perched on the right end of the colophon's
 * top rule (it appears to stand on the line). Credit: "Let's Go Eevee Pixelated"
 * by StarWolff-Nyota (DeviantArt, F2U) — see the Art Credits note. Not committed.
 */
export default function AboutEevee() {
  return (
    <img
      className="about_eevee_perch"
      src={eevee}
      alt="A pixel Eevee perched on the line"
      title="eevee"
    />
  );
}
