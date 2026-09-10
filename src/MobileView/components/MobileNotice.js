import React, { useState } from "react";
import "./mobilenotice.css";

// A gentle (and honest) nudge shown once per session on mobile: this site was
// built for desktop and not everything behaves down here on purpose.
export default function MobileNotice() {
  const [show, setShow] = useState(() => {
    try { return sessionStorage.getItem("mobile-notice-dismissed") !== "1"; }
    catch (e) { return true; }
  });
  if (!show) return null;

  const dismiss = () => {
    try { sessionStorage.setItem("mobile-notice-dismissed", "1"); } catch (e) {}
    setShow(false);
  };

  return (
    <div className="mnotice_overlay" onClick={dismiss}>
      <div className="mnotice_card" onClick={(e) => e.stopPropagation()}>
        <div className="mnotice_eyebrow">// psst, real quick</div>
        <h2 className="mnotice_title">Best enjoyed on a big screen.</h2>
        <p className="mnotice_body">
          Full confession: I built this website for desktop and, in the spirit of
          honesty, couldn't quite be bothered to make <em>every</em> little thing
          behave on a phone. So a few bits down here are held together with hope,
          good intentions, and the occasional strip of duct tape. 🩹
        </p>
        <p className="mnotice_body">
          For the version I'm actually proud of — the animations, the scroll
          trickery, all the fiddly delightful stuff — come say hi from a laptop.
          Otherwise, feel free to poke around at your own (very mild) peril!
        </p>
        <button className="mnotice_btn" onClick={dismiss}>
          Fine, I'll risk it &rarr;
        </button>
      </div>
    </div>
  );
}
