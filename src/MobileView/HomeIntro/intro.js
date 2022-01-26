import React, {useState, useEffect} from "react";

import "./intro.css"

// import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

export default function Intro() {

  const { height } = useWindowDimensions();

  const [about, setAbout] = useState(false);

  useEffect(() => {
    if(about===true)
    {
        window.scrollTo({top:height,left:0})
        console.log(height)
    }
  }, [about, height])

  const customSummary = {
    width:"80vw",
    height:"1px",
    marginLeft: "10vw",
    marginBottom:"5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  }

  return (
    <div>
      <div id="home" className="main_home_container" >
        <div className="cygirl_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">
            I'm Nikita.
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            but that's not all i am!
          </h2>
          <h2 className="hey_desc_mobile semibold">
            awkward laughter
          </h2>
        </div>







        <a href="#about">
        <div className="about_button_mobile">
          ABOUT
        </div>
        </a>

      </div>

      <div id="about" className="about_container" >

      <div className="about_content">

        <div className="col1">
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

</div>

      </div> 

      </div>


    </div>
  );
};