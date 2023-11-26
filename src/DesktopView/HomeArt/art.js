import React, {useState} from "react";
import "./art.css"
import UseAnimations from "react-useanimations";
import KeyboardCovers from './keyboardCovers';
import keyboardData from './keyboardData.json';
import Sketches from './sketches';

export default function Art() {

    const [summaryColor1, setSummaryColor1] = useState(0);
    const [summaryColor2, setSummaryColor2] = useState(0);

    const customSummary1 = {
      width:"16vw",
      height:"2px",
      float:"left",
      background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: summaryColor1? "left bottom" : "right bottom",
      }

      const customSummary2 = {
        width:"16vw",
        height:"2px",
        float:"left",
        background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
        backgroundSize: "200% 100%",
        transition: "all 1s ease",
        backgroundPosition: summaryColor2? "left bottom" : "right bottom",
        }
    
    return (
        <div>

            {/* THE MAIN ART PAGE AND THE ID LINK TO THE art PAGE */}

                <div id="art" className="main_art_container" >

                    <div className="page_number">04</div>
                        <div className="dancergirl_picture"></div>

                        <a href="#music" onMouseEnter={()=>setSummaryColor1(1)} onMouseLeave={()=>setSummaryColor1(0)} className="intro_box1">
                            <div className="summary_intro_box_white">
                                <h3 className="summary_heading_white_bottom">Music</h3>
                                <h3 className="summary_description_white_bottom">04A</h3>
                                <div style={customSummary1}></div>
                            </div>
                        </a>

                        <a href="#sketches" onMouseEnter={()=>setSummaryColor2(1)} onMouseLeave={()=>setSummaryColor2(0)} className="intro_box2">
                            <div className="summary_intro_box_white">
                                <h3 className="summary_heading_white_bottom">Sketches</h3>
                                <h3 className="summary_description_white_bottom">04B</h3>
                                <div style={customSummary2}></div>
                            </div>
                        </a>

                        <div className="hey_text_div">
                            <h1 className="hey_text_tad_smaller">
                                And on occasion, <br/>I do artsy stuff.
                            </h1>
                        </div>

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
                        </h1> 

                        <br/><br/><br/>

                        <KeyboardCovers videos={keyboardData} />

                        <div className="art_content">
                        See more on Soundcloud... or scroll down!
                        <span>
                            <a href="#sketches">
                                <UseAnimations animationKey="arrowDown" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right" }}/>
                            </a>
                            <a href="https://soundcloud.com/nikita-971387991" target="_blank" rel="noreferrer">
                                <UseAnimations animationKey="activity" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right" }}/>
                            </a>
                        </span>
                        </div>

                        <br/><br/>

                        <a href="#art" className="scrollup_art">
                            <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", marginTop: "108vh" }}/>
                        </a>

                        <div className="art_contact_links">
                        <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                                <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "108vh" }}/>
                            </a>
                            <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
                                <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
                            </a>
                            <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
                                <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                            </a>
                            <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
                            <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                            </a>
                        </div>

                        </div>
    
                        <div id="sketches" className="sketches_container">

                        <h1 className="art_title1">
                        Sketches
                        <span>
                            <a href="#music">
                                <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right", marginRight:"18vw" }}/>
                            </a>
                        </span>
                        </h1> 
                        
                        <br/><br/><br/>

                        <Sketches />

                        <div className="art_content">
                        Three in the listing
                        <br/>
                        are all, for I once ignored
                        <br/>
                        their aspect ratios (._.)
                        </div>

                        <br/><br/>

                        <h3 className="about_heading">
                        Thanks for sticking around to get here!
                        </h3>

                        </div>
                    </div>

                </div> 

                <div className="art_contact_links">
                <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "200vh" }}/>
                    </a>
                    <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                </div>

        </div>
    )
}