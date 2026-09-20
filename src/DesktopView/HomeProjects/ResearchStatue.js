import React from "react";
import "./researchStatue.css";

import statue from "../../img/statues/statue-antinous.webp";

/*
 * EXPERIMENTAL: a single, very subtle Antinous profile bleeding off the right
 * edge of the Research page. Rendered inside .projects_all_content
 * (position:relative), confined to the right gutter, pointer-events:none.
 * Easily removable. Not committed.
 */
export default function ResearchStatue() {
  return (
    <div className="research_statue_wrap" aria-hidden="true">
      <img className="research_statue" src={statue} alt="" />
    </div>
  );
}
