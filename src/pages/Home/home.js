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
      a rather peaceful life of a Pokemon trainer. I try to learn new things every once in a while when the realization
      that having deep and wise thoughts all the time isn't gonna get me anywhere, dawns on me.
      </h2>

      <h3 className="filler_text">
        Now for the basics.
      </h3>

      <h5 className="home_text_small">
      I'm Nikita, a CS undergrad currently studying in MEC, Kochi. 
      <br/><br/>
      Dogstudio is a multidisciplinary
      creative studio at the intersection
      of art, design and technology.
      Our goal is to deliver amazing experiences that make
      people talk, and build strategic value for brands, tech,
      entertainment, arts & culture.
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
        it's time to shine.
      </h4>

      <h1 className="main_text">
        Now coming to my creative side!
      </h1>

      <h5 className="home_text_small">
      ...and on that note, here's a list of things I enjoy.
      </h5>

      <h3 className="filler_text">
        Poetry and prose. <br/>
        Does it get any better than this?
      </h3>

      <button className="home_button home_button_1">
        <h6 classname="home_button_text">
        Read away
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
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