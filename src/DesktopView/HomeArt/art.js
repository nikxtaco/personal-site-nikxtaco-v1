import React, {Component, useState, useEffect} from "react";
import "./art.css"
import UseAnimations from "react-useanimations";
// import Rellax from "rellax";
import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Art() {

  // useEffect(() => {
  //   if(width>750)
  //   {
  //     new Rellax(".hi_animate", { // <---- Via class name
  //     speed: -3, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   new Rellax(".random_animate", { // <---- Via class name
  //     speed: 0, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   new Rellax(".hey_animate", { // <---- Via class name
  //     speed: -1, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   new Rellax(".creative_animate", { // <---- Via class name
  //     speed: 1, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   }
  // });

  const { height } = useWindowDimensions();

  const [pageDown, setPageDown] = useState(false);
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

  useEffect(() => {
    if(pageDown===true)
    {
        window.scrollBy({top:height,left:0})
    }
  }, [pageDown, height])
  
  return (
    <div>

      <div id="art" className="main_art_container" >
        <div className="page_number">04</div>
        <div className="dancergirl_picture"></div>

          <a href="https://soundcloud.app.goo.gl/ERQcF" target="_blank" onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white">Music</h3>
              <h3 className="summary_description_white">I sometimes make keyboard covers and post them here.</h3>
              <h3 className="summary_description_white">07</h3>
              <div style={customSummary}></div>
            </div>
          </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            Most often, <br/>I try to make art.
          </h1>
        </div>

      </div>

      <div className="stripe_design stripes_slide_00">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <a href="#home"><div className="back_to_home" onClick={()=>{setPageDown(!pageDown)}}>Back To Home</div></a>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

    </div>
  )
}