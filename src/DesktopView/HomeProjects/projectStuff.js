import React, { useState } from 'react';
import "./projects.css"
import UseAnimations from "react-useanimations";

import FilterBubbleMockup from "../../img/projects/FilterBubbleMockup.png"
import AlrtAIMockup from "../../img/projects/AlrtAIMockup.png"
import FigmaPersonalWebsite from "../../img/projects/FigmaPersonalWebsite.png"

// exported so the Research page's table of contents can list each mockup
export const MOCKUPS = [
  {
    img: FigmaPersonalWebsite,
    url: 'https://github.com/nikxtaco/personal-site-nikxtaco-v1',
    caption: "The Figma board behind this very website, from first moodboard to final layout.",
    id: "personal-website",
    label: "Personal Website",
  },
  {
    img: FilterBubbleMockup,
    url: 'https://github.com/DSC-QGambit',
    caption: "Filter Bubble — a news aggregator and summariser that surfaces ideologically diverse takes and flags source credibility.",
    id: "filter-bubble",
    label: "Filter Bubble",
  },
  {
    img: AlrtAIMockup,
    url: 'https://github.com/nikxtaco/alrtai-landing',
    caption: "A landing page I built for alrt.ai, a data-science startup.",
    id: "alrt-ai",
    label: "alrt.ai",
  },
];

const ProjectStuff = () => {
    const [lbIndex, setLbIndex] = useState(null); // open lightbox at this index
    const open = (i) => setLbIndex(i);
    const close = () => setLbIndex(null);
    const step = (e, dir) => {
      e.stopPropagation();
      setLbIndex((n) => (n === null ? n : (n + dir + MOCKUPS.length) % MOCKUPS.length));
    };

    const featured = MOCKUPS[0];

  return (
    <>
    <div className="iframe-container">
      {/* Personal website: one connected card — thumbnail on the left, write-up on the right */}
      <div id={"mockup-" + featured.id} className="iframe-cell iframe-featured-row">
        <div className="mockup_img_wrap">
          <img className="iframe-projects-item iframe-projects-item-featured"
            src={featured.img}
            alt={featured.label}
            style={{ cursor: "pointer" }}
            onClick={() => open(0)}
          />
          <a href={featured.url} target="_blank" rel="noreferrer" className="mockup_gh_overlay" aria-label="View on GitHub">
            <UseAnimations animationKey="github" size={"2.6vmin"} style={{ color: '#1a1a1a' }}/>
          </a>
        </div>

        <div className="mockup_desc">
          <div className="mockup_desc_title">This very website (v2)</div>
          <div className="mockup_desc_body">
          Of all my design projects, this website has eaten the most hours by far (and
          there were many; I took up far more frontend work than I'd have liked in
          undergrad, in hindsight). I settled on the dark aesthetic you still see here back in 2020,
          and after many Figma and coded-from-scratch iterations (displayed in this
          pre-v2 design snapshot), shipped the <a className="mockup_desc_link" href="https://nikxtaco.netlify.app" target="_blank" rel="noreferrer">v1 website</a> (which
          still stands as a relic of the past) and left it untouched for years. After the
          AI-coding boom I grew oddly reluctant to overhaul it, knowing I'd just
          Claude-code the fixes and could no longer say I'd built it all myself.
          </div>
          <div className="mockup_desc_body">
          As of September 2026, I've decided to <i>just do it</i>, and here you are!
          </div>
        </div>
      </div>

      {/* remaining mockups */}
      {MOCKUPS.slice(1).map((m, idx) => {
        const i = idx + 1;
        return (
          <div key={m.id} id={"mockup-" + m.id} className="iframe-cell">
            <div className="mockup_img_wrap">
              <img className="iframe-projects-item"
                src={m.img}
                alt={m.label}
                style={{ cursor: "pointer" }}
                onClick={() => open(i)}
              />
              <a href={m.url} target="_blank" rel="noreferrer" className="mockup_gh_overlay" aria-label="View on GitHub">
                <UseAnimations animationKey="github" size={"2.6vmin"} style={{ color: '#1a1a1a' }}/>
              </a>
            </div>
          </div>
        );
      })}
    </div>

    {lbIndex !== null && (
      <div className="lb_overlay" onClick={close}>
        <button className="lb_close" onClick={close} aria-label="Close">×</button>
        <button className="lb_arrow lb_prev" onClick={(e) => step(e, -1)} aria-label="Previous image">‹</button>
        <img
          className="lb_img"
          src={MOCKUPS[lbIndex].img}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
        <button className="lb_arrow lb_next" onClick={(e) => step(e, 1)} aria-label="Next image">›</button>
        <div className="lb_count">{lbIndex + 1} / {MOCKUPS.length}</div>
      </div>
    )}
    </>
  );
};

export default ProjectStuff;
