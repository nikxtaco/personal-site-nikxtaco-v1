import React, {useState} from "react";
import "./projects.css"
// import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Projects() {

  // const { height } = useWindowDimensions();

  const [pageDown, setPageDown] = useState(false);
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

  // useEffect(() => {
  //   if(pageDown===true)
  //   {
  //       window.scrollBy({top:height,left:0})
  //   }
  // }, [pageDown, height])
  
  return (
    <div>

      <div id="projects" className="main_projects_container" >
        <div className="page_number">03</div>
        <div className="buildingart_picture"></div>

        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer">
        <div onClick={()=>{setPageDown(!pageDown)}} onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white_bottom">Github</h3>
              {/* <h3 className="summary_description_white">I sometimes wonder who I am myself as well.</h3> */}
              <h3 className="summary_description_white_bottom">03A</h3>
              <div style={customSummary}></div>
            </div>
        </div>
        </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            Sometimes, <br/>I code.
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