import React, { useState } from "react";
import "./VersionPopup.css";

// Shown on the old v1 site (nikxtaco.netlify.app) to point visitors at the current
// site (nikxtaco.com), while still letting them stay and explore v1 if they want.
export default function VersionPopup() {
  const [show, setShow] = useState(() => {
    try { return sessionStorage.getItem("v1-notice-dismissed") !== "1"; }
    catch (e) { return true; }
  });
  if (!show) return null;
  const dismiss = () => {
    try { sessionStorage.setItem("v1-notice-dismissed", "1"); } catch (e) {}
    setShow(false);
  };
  return (
    <div className="vpop_overlay" onClick={dismiss}>
      <div className="vpop_card" onClick={(e) => e.stopPropagation()}>
        <div className="vpop_eyebrow">// heads up</div>
        <h2 className="vpop_title">This site has a new home.</h2>
        <p className="vpop_body">
          <strong>nikxtaco.com</strong> is the work-in-progress, but updated, version of my
          website. What you're
          looking at now is <em>v1</em>, the original I built back in 2020, kept online as a
          relic of the past, and so I can still say "Look, I coded this one from scratch
          without AI!"
        </p>
        <div className="vpop_actions">
          <a className="vpop_btn vpop_btn_primary" href="https://nikxtaco.com">
            Take me to nikxtaco.com &rarr;
          </a>
          <button className="vpop_btn vpop_btn_ghost" onClick={dismiss}>
            Explore this v1 site
          </button>
        </div>
      </div>
    </div>
  );
}
