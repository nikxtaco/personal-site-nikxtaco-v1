import React, {useState} from "react";
import "./art.css"
import UseAnimations from "react-useanimations";
// import Rellax from "rellax";
// import useWindowDimensions from "../../helpers/WindowDimensions.js"
import KeyboardCovers from './keyboardCovers';
import keyboardData from './keyboardData.json';
import Sketches from './sketches';

export default function Art() {

    const [summaryColor, setSummaryColor] = useState(0)

    const customSummary = {
      width:"16vw",
      height:"2px",
      float:"left",
      background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: summaryColor? "left bottom" : "right bottom",
    }
    
    return (
        <div>

            {/* THE MAIN ART PAGE AND THE ID LINK TO THE art PAGE */}

                <div id="art" className="main_art_container" >

                    <div className="page_number">04</div>
                        <div className="dancergirl_picture"></div>

                        {/* <a href="https://soundcloud.app.goo.gl/ERQcF" target="_blank" rel="noreferrer" onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box"> */}
                        <a href="#art_stuff" onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
                            <div className="summary_intro_box_white">
                                <h3 className="summary_heading_white_bottom">Soundcloud</h3>
                                {/* <h3 className="summary_description_white">I sometimes make keyboard covers and post them here.</h3> */}
                                <h3 className="summary_description_white_bottom">04A</h3>
                                <div style={customSummary}></div>
                            </div>
                        </a>

                        <div className="hey_text_div">
                            <h1 className="hey_text_tad_smaller">
                                And on occasion,<br/>I play the keyboard.
                            </h1>
                        </div>

                    </div>


                {/* THE ABOUT PAGE BELOW THE MAIN INTRO PAGE */}


                <div id="art_stuff" className="art_container" >

                    <div className="art_all_content">

                    <div>
                        <h3 className="art_heading">
                        - Art & Music
                        </h3>
                        <h1 className="art_title1">
                        Keyboard Covers
                        </h1> 

                        <br/><br/><br/>

                        <KeyboardCovers videos={keyboardData} />

                        <p className="art_content">
                        See more on Soundcloud... or scroll down!
                        <span>
                            <a href="#sketches">
                                <UseAnimations animationKey="arrowDown" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right" }}/>
                            </a>
                            <a href="https://soundcloud.com/nikita-971387991" target="_blank" rel="noreferrer">
                                <UseAnimations animationKey="activity" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right" }}/>
                            </a>
                        </span>
                        </p>

                        <br/><br/>

                        <a href="#art" className="scrollup_art">
                            <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", marginTop: "100vh" }}/>
                        </a>

                        <div className="art_contact_links">
                        <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                                <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "100vh" }}/>
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
    
                        <div id="sketches" className="sketches_container">

                        <h1 className="art_title1">
                        Sketches
                        </h1> 
                        
                        <br/><br/><br/>

                        <Sketches />

                        <h3 className="about_heading">
                        Listing just 3 because I hadn't previously bothered to maintain aspect ratio for my drawings.
                        <br/>
                        Thanks for sticking around to get here :)
                        </h3>

                        <p className="art_content">
                        Go back
                        <span>
                            <a href="#art_stuff">
                                <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float: "right" }}/>
                            </a>
                        </span>
                        </p>

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

        </div>
    )
}