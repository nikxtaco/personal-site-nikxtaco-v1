import React, {useState} from "react";
import "./art.css"
// import UseAnimations from "react-useanimations";
// import Rellax from "rellax";
// import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Art() {

    const [summaryColor, setSummaryColor] = useState(0)

    const customSummary = {
      width:"16vw",
      height:"4px",
      float:"left",
      background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: summaryColor? "left bottom" : "right bottom",
    }
    
    return (
        <div>

            {/* THE MAIN INTRO PAGE AND THE ID LINK TO THE ABOUT PAGE */}

                <div id="art" className="main_art_container" >

                    <div className="page_number">04</div>
                    <div className="dancergirl_picture"></div>

                    <a href="https://soundcloud.app.goo.gl/ERQcF" target="_blank" rel="noreferrer" onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
                        <div className="summary_intro_box_white">
                            <h3 className="summary_heading_white">Music</h3>
                            <h3 className="summary_description_white">I sometimes make keyboard covers and post them here.</h3>
                            <h3 className="summary_description_white">07</h3>
                            <div style={customSummary}></div>
                        </div>
                    </a>

                    <div className="hey_text_div">
                        <h1 className="hey_text">
                            Most often,<br/>I try to make art.
                        </h1>
                    </div>

                </div>

        </div>
    )
}