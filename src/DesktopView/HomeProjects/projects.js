import React, {Component, useState, useEffect} from "react";
import "./projects.css"
import UseAnimations from "react-useanimations";
// import Rellax from "rellax";
import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Projects() {

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

      <div className="stripe_design stripes_slide_00">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <a href="#home"><div className="back_to_home" onClick={()=>{setPageDown(!pageDown)}}>Back To Home</div></a>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div id="about" className="about_container">
        <div className="about_bg_image"></div>
      {/* <div className="page_number">00</div> */}

        <div className="about_content">
          <h1 className="about_heading">
            Who Am I?
          </h1>

          <div className="about_text">
            <p className="about_para_white">
            I'm a person with multiple, ordinary interests and very little patience for most things, not much unlike every other GenZ kid out there. I like spending time scrolling through art and music pages and not once have I stopped wishing for a rather peaceful life of a Pokemon trainer. I try to learn new things every once in a while when the realization that having deep and wise thoughts all the time isn't going to get me anywhere, dawns on me.
            </p>

            <p className="about_para_grey">
            Vague content aside, I'm a Sophomore Computer Science Engineering student, currently studying in MEC, Kochi. 
            At the moment, I'm juggling between things I like doing and since these things change rather often, I'd prefer you asked me in person if you wanted to know more, than me try to list them out here. So yeah, I'm just another person who wants to do it all. Inefficient and time consuming? Yes. But then again, I have time to kill. Or do I?
             </p>

            <p className="about_para_white">
            Either way, you're free to reach out to me via any of my social media handles, though I do prefer traditional e-mails over them all. Until then, cheers!
            </p>

            

          </div>
        </div>

        <div className="about_circle"></div>
        <div className="about_circle_text">about</div>

        <div className="about_contact_links">
              <a href="https://www.github.com/nikxtaco">
             <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "0vh" }}/>
              </a>

             <a href="https://instagram.com/nikxtaco">
        <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
           </a>

             <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
            <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
            </a>
               
             <a href="https://twitter.com/nikxtaco">
            <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
             </a>
             </div>

      </div>


    </div>
  )
}