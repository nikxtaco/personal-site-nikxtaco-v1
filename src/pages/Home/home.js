import React, {useEffect} from "react";
import Navbar from "../../components/navbar/navbar.js"
import Footer from "../../components/footer/footer.js"

import Scrollable_Blog from '../Blog/scrollable_blog.js';

import "./home.css"

import UseAnimations from "react-useanimations";

import { HashLink as HLink } from 'react-router-hash-link';

import Rellax from "rellax";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

// import top_image from "../../media/whitewoman.png"
// import feathers from "../../img/feathers_blue.jpg"

export default () => {

  useEffect(() => {
    if(width>1440)
    {
      new Rellax(".hi_animate", { // <---- Via class name
      speed: -3, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(".random_animate", { // <---- Via class name
      speed: 0, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(".hey_animate", { // <---- Via class name
      speed: -1, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(".creative_animate", { // <---- Via class name
      speed: 1, 
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    }
  });

  const { width } = useWindowDimensions();
  
  return (
    <div>
    <Navbar/>
    <div style={{position:"absolute", marginLeft:0, marginTop:0}}>
      <Scrollable_Blog/>

      {/* <Blog style={{position:"absolute", marginLeft:"100vw"}}/> */}

    <div className="main_container">

      <div className="top_image"></div>
      {/* <img className="top_image" alt="" src={top_image}></img> */}

      <h1 className="hi_text hi_animate">
        Hey there! <br/>
        I'm Nikita.
      </h1>

      <div className="random_animate">
      <h4 className="home_text_white1" style={{textAlign: "right"}}>
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
      width>1440?
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

      <h4 className="home_text_white2 hey_animate">
        But hey, there are things&nbsp;
        {width<1440?<br/>:null}
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
      width>1440?
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

    <Footer />

    </div>
    </div>
  );
};