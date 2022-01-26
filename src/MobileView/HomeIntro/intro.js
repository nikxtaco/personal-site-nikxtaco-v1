import React, {useState, useEffect} from "react";

// import Scrollable_Blog from '../../pages/Blog/scrollable_blog.js';

import "./intro.css"

// import UseAnimations from "react-useanimations";

// import Rellax from "rellax";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

// import stripes from "../../media/stripes.svg"
// import hi_picture from "../../media/cutie5.jpeg" //tree.png, pikachu2.jpg
import map from "../../media/BlackMarble.jpg"
import idiotsandwich from "../../media/idiotsandwich.jpg"

export default function Intro() {

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

  const [about, setAbout] = useState(false);

  useEffect(() => {
    if(about===true)
    {
        window.scrollTo({top:height,left:0})
        console.log(height)
    }
  }, [about, height])
  // function horizontalScroll(e){
  //   console.log(e.deltaY)
  //   if(e.deltaY > 0)
  //   window.scrollBy({ left: e.deltaY, behavior: 'smooth'})
  //   else
  //   window.scrollBy({ left: e.deltaY, behavior: 'smooth'})
  // }

  const customSummary = {
    width:"80vw",
    height:"1px",
    float:"left",
    marginLeft: "10vw",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  }

  return (
    <div>

      {/* <div className="main_home_container" onWheel={horizontalScroll} > */}
      <div className="main_home_container" >
        <div className="cygirl_picture_mobile"></div>
{/* 
        <div onClick={()=>{setAbout(!about)}} className="intro_box1">
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white">About</h3>
            <h3 className="summary_description_white">I sometimes wonder who I am myself as well.</h3>
            <h3 className="summary_description_white">00</h3>
          </div>
        </div> */}

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">
            I'm Nikita.
          </h1>
          <div style={customSummary}></div>
        </div>

      </div>
{/* 
      <div className="about_container" >

      <div className="about_content">

        <div className="col1">
          <img className="idiotsandwich" src={idiotsandwich} alt=""></img>
        <h4 className="random_facts">
        Let's start with random facts.
      </h4> 

      <h2 className="about_para1">
      I'm a person with multiple, ordinary interests and very little patience (only when it doesn't concern work, recruiters!), not much unlike every other GenZ kid out there. I like spending time scrolling through art and music pages and not once have I stopped wishing for a rather peaceful life of a Pokemon trainer. I try to learn new things every once in a while when the realization that having deep and wise thoughts all the time isn't going to get me anywhere, dawns on me.
      </h2>

      <h4 className="basics">
        Now for the basics.
      </h4>

      <h2 className="about_para2">
      Vague content aside, I'm a Sophomore Computer Science Engineering student, currently studying in MEC, Kochi. At the moment, I'm juggling between things I like doing and since these things change rather often, I'd prefer you asked me in person if you wanted to know more, than me try to list them out here. So yeah, I'm just another person who wants to do it all. Inefficient and time consuming? Yes. But then again, I have time to kill. Or do I?
      </h2>

      </div>

      <div className="col2">
      <img className="map" src={map} alt=""></img> */}

        {/* fir conrtact */}
{/* </div>

      </div> */}

      {/* </div> */}


    </div>
  );
};