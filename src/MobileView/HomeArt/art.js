import React, {useState, useEffect} from "react";

import "./art.css"

import UseAnimations from "react-useanimations";
import KeyboardCovers from './keyboardCovers';
import keyboardData from './keyboardData.json';
import Sketches from './sketches';

import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Intro() {

  const { height } = useWindowDimensions();

  const [about] = useState(false);

  useEffect(() => {
    if(about===true)
    {
        window.scrollTo({top:height,left:0})
        console.log(height)
    }
  }, [about, height])

  const customSummary = {
    width:"80vw",
    height:"1px",
    marginLeft: "10vw",
    marginBottom:"5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  }

  return (
    <div>
      <div id="art" className="main_art_container" >
        <div className="dancergirl_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">
            Art
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            i sometimes make covers
          </h2>
          <h2 className="hey_desc_mobile">
            on the keyboard
          </h2>
        </div>

        <a href="#music">
        <div className="about_button_mobile2">
          MUSIC
        </div>
        </a>

        <a href="#sketches">
        <div className="about_button_mobile2">
          SKETCHES
        </div>
        </a>

      </div>



      {/* THE ART STUFF BELOW THE MAIN ART INTRO PAGE */}

      <div id="art_stuff" className="art_container" >

        <div className="art_all_content">

            <div id="music" className="music_container">

                <h3 className="art_heading">
                - Art & Music
                </h3>

                <h1 className="art_title1">
                Keyboard Covers
                <span>
                    <a href="#art">
                        <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right"}}/>
                    </a>
                </span>
                </h1> 

                <br/><br/><br/>

                <KeyboardCovers videos={keyboardData} />

                <br/><br/><br/>

                <a href="https://soundcloud.com/nikita-971387991" target="_blank" rel="noreferrer">
                  <div className="about_button_mobile2" style={{margin: "auto"}}>
                  SOUNDCLOUD
                  </div>
                </a>

            <div id="sketches" className="sketches_container_mobile">

                <h1 className="art_title1">
                Sketches
                <span>
                    <a href="#art">
                        <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right"}}/>
                    </a>
                </span>
                </h1> 
                
                <br/><br/><br/>

                <Sketches />

                <br/><br/>

                <div className="art_heading">
                Thanks for sticking around to get here!
                </div>

                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>

            </div>

          </div> 

          </div>
          </div>

    </div>
  );
};