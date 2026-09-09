import React from "react";

import "./art.css";

import Sketches from "../../DesktopView/HomeArt/sketches";
import MusicPlayer from "../../DesktopView/HomeArt/MusicPlayer";

export default function Art() {

  const customSummary = {
    width: "80vw",
    height: "1px",
    marginLeft: "10vw",
    marginBottom: "5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  };

  return (
    <div>
      <div id="art" className="main_art_container">
        <div className="dancergirl_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">Art & Music</h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">And on occasion,</h2>
          <h2 className="hey_desc_mobile">I do artsy stuff.</h2>
        </div>

        <a href="#music">
          <div className="about_button_mobile2">MUSIC</div>
        </a>
        <a href="#sketches">
          <div className="about_button_mobile2">SKETCHES</div>
        </a>
      </div>

      <div id="art_stuff" className="art_container art_m">
        <div className="art_all_content">

          <div id="music" className="music_container">
            <h3 className="art_heading">- Art & Music</h3>
            <h1 className="art_title1">Keyboard Covers</h1>
            <br /><br />
            <MusicPlayer />
            <div className="art_content">
              Listen to more on <a className="soundcloud_link" href="https://soundcloud.com/nikita-971387991" target="_blank" rel="noreferrer">Soundcloud</a>... or scroll down!
            </div>
            <br /><br />
          </div>

          <div id="sketches" className="sketches_container_mobile">
            <h1 className="art_title1">Sketches</h1>
            <br /><br />
            <Sketches />
            <br /><br /><br />
          </div>

        </div>
      </div>

    </div>
  );
}
