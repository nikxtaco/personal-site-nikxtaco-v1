import React, {useState, useEffect} from "react";

// import Scrollable_Blog from '../../pages/Blog/scrollable_blog.js';

import "./intro.css"

import UseAnimations from "react-useanimations";

import { HashLink as HLink } from 'react-router-hash-link';

// import Rellax from "rellax";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

// import greatwave from "../../media/redwomangrey.png"
// import feathers from "../../img/feathers_blue.jpg"

export default () => {

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

  const { width, height } = useWindowDimensions();

  const [about, setAbout] = useState(false);

  useEffect(() => {
    if(about===true)
    {
        window.scrollBy({top:height,left:0})
    }
  }, [about, height])
  // function horizontalScroll(e){
  //   console.log(e.deltaY)
  //   if(e.deltaY > 0)
  //   window.scrollBy({ left: e.deltaY, behavior: 'smooth'})
  //   else
  //   window.scrollBy({ left: e.deltaY, behavior: 'smooth'})
  // }

  
  return (
    <div style={{width:'100vw'}}>

    {/* <div className="main_home_container" onWheel={horizontalScroll} > */}
    <div className="main_home_container" >

      {/* <img className="great_wave" alt="" src={greatwave}></img> */}


      <div onClick={()=>{setAbout(!about)}} className="intro_box">
        <div className="summary_intro_box_white">
          <h3 className="summary_heading_white">About</h3>
          <h3 className="summary_description_white">I sometimes wonder who I am myself as well.</h3>
          <h3 className="summary_description_white">00</h3>
        </div>
      </div>















    <div className="hey_text_div">
      <h1 className="hey_text">
        Hey there! I'm Nikita.
      </h1>
      </div>


      <div className="random_animate">
      <h4 className="home_text_red1" style={{textAlign: "right"}}>
        Let's start with random facts.
      </h4>

      <h2 className="home_text_big1">
      I'm a person with multiple, ordinary interests and very little patience, not much unlike every other 
      GenZ kid out there. I like spending time stalking art and music pages and not once have I stopped wishing for 
      a rather peaceful life of a Pokemon trainer. I try to learn new things every once in a while when the realization, 
      that having deep and wise thoughts all the time isn't gonna get me anywhere, dawns on me.
      </h2>

      <h3 className="filler_text">
        Now for the basics.
      </h3>

      <h2 className="home_text_big2">
      I'm a CS undergrad student, currently studying in MEC, Kochi. For the longest time I wanted to 
      be an astrophysicist cuz duh, it's cool. But well, does anything ever go according to plan? Sigh.
      At the moment, I'm quite interested in technology as well. 
      <br/>
      Still a Rookie though.
      <p>¯\_(ツ)_/¯</p>
      </h2>

      <button className="home_button home_button_1">
      <HLink to="/projects">
        <h6 className="link_text">
          Check out my projects
      {
      width>750?
      <UseAnimations
      animationKey="skipForward"
      size={45}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", marginTop:"-3.5rem", paddingLeft:"10rem" }}
      />:
      <UseAnimations
      animationKey="skipForward"
      size={20}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
      }
        </h6>
        </HLink>
      </button>

      </div>

      <h4 className="home_text_red2 hey_animate">
        But hey, there are things&nbsp;
        {width<750?<br/>:null}
        I'm moderately good at too!
      </h4>

      <div className="creative_animate">
      <h1 className="main_text">
        Coming to my creative side!
      </h1>

      <h2 className="home_text_big2">
      I like playing the keyboard, and sometimes succeed in hiding the impatience that resonates through it. 
      Sketching is also a stress-buster for me from time to time. On that note, here's a list of things I enjoy...
      </h2>

      <h3 className="filler_text interests_text">
        Poetry and prose. <br/>
        Does it get any better than this? 
      </h3>

      <button className="home_button home_button_1">
        <HLink to="/blog">
        <h6 className="link_text">
        Read away
        {
      width>750?
      <UseAnimations
      animationKey="skipForward"
      size={45}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", marginTop:"-3.5rem", paddingLeft:"10rem" }}
      />:
      <UseAnimations
      animationKey="skipForward"
      size={20}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
      }
        </h6>
        </HLink>
      </button>

      <h2 className="home_text_big2">
      Yes, I know there's only one item on it so it's not exactly a list but bear with me. 
      I hope to add more of them someday.
      </h2>

      </div>

    </div>

    </div>
  );
};