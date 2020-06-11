import React from "react";
import Navbar from "../../components/navbar/navbar.js"

import "./home.css"

import UseAnimations from "react-useanimations";

export default () => {
  return (
    <div>
      <Navbar/>

    <div className="main_container">
      <h1 className="main_text">
        Hey there! <br/>
        I'm Nikita.
      </h1>

      <h4 className="home_text_red">
        Let's start with random facts.
      </h4>

      <h2 className="home_text_big">
      I'm a person with multiple, ordinary interests and very little patience, not much unlike every other 
      GenZ kid out there. I like spending time stalking art and music pages and not once have I stopped wishing for 
      a rather peaceful life of a Pokemon trainer. I try to learn new things every once in a while when the realization, 
      that having deep and wise thoughts all the time isn't gonna get me anywhere, dawns on me.
      </h2>

      <h3 className="filler_text">
        Now for the basics.
      </h3>

      <h5 className="home_text_small">
      I'm a CS undergrad student, currently studying in MEC, Kochi. For the longest time I wanted to 
      be an astrophysict cuz duh, it's cool. But well, does anything ever go according to plan? Sigh.
      <br/>
      <p style={{textAlign:"center"}}>¯\_(ツ)_/¯</p>
      At the moment, I'm quite interested in technology as well. Still a Rookie though.
      </h5>

      <button className="home_button home_button_1">
        <h6 classname="home_button_text">
          Check out my projects
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
      </button>

      <h4 className="home_text_red">
        But hey, there are things I'm moderately good at too!
      </h4>

      <h1 className="main_text">
        Coming to my creative side!
      </h1>

      <h5 className="home_text_small">
      I like playing the keyboard, and sometimes succeed in hiding the impatience that resonates through it. 
      Sketching is also a stress-buster for me from time to time. On that note, here's a list of things I enjoy...
      </h5>

      <h3 className="filler_text">
        Poetry and prose. <br/>
        Does it get any better than this? 
      </h3>

      <button className="home_button home_button_1">
        <a href="/blog">
        <h6 classname="home_button_text">
        Read away
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
        </a>
      </button>

      <h5 className="home_text_small">
      Yes, I know there's 
      only one item on it so it's not exactly a list but bear with me. 
      I hope to add more of them someday.
      </h5>

    </div>

    </div>
  );
};