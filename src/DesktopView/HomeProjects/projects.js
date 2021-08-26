import React, {useState, useEffect} from "react";
import "./projects.css"
// import UseAnimations from "react-useanimations";
// import Rellax from "rellax";
import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Projects() {

  // useEffect(() => {
  //   if(width>1440)
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

      <div id="projects" className="main_projects_container" >
        <div className="page_number">03</div>
        <div className="buildingart_picture"></div>

        <div onClick={()=>{setPageDown(!pageDown)}} onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
          {/* <a href="#about" className="intro_box"> */}
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white">About</h3>
              <h3 className="summary_description_white">I sometimes wonder who I am myself as well.</h3>
              <h3 className="summary_description_white">00</h3>
              <div style={customSummary}></div>
            </div>
          {/* </a> */}
        </div>

        <div className="hey_text_div">
          <h1 className="hey_text">
            Sometimes, <br/>I work.
          </h1>
        </div>

      </div>
{/* 
      <div className="stripe_design stripes_slide_00">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <a href="#home"><div className="back_to_home" onClick={()=>{setPageDown(!pageDown)}}>Back To Home</div></a>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div> */}

    </div>
  )
}