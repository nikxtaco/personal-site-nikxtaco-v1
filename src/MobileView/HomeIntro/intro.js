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







      <div id="about" className="about_container_mobile" >

      <div className="about_content">

        <div>
          <h3 className="about_heading_mobile">
            - ABOUT
          </h3>
          <h1 className="about_title1_mobile">
           I'm an<br/>aspiring...
          </h1> 
          <h3 className="about_heading_mobile">
            bit of pretty much everything.
          </h3>

          <p className="about_content_mobile">
          I've got multiple interests and (definitely <br/>
          practical) ambitions that I shelter in my <br/>
          (arguably) well-organized mind. When <br/>
          I'm not doing them or thinking of doing <br/>
          them, I spend my time scrolling through <br/>
          art and music pages, burning through the <br/>
          movies and shows on my infinitely long <br/>
          recommendation list, or making notes on <br/>
          random things that I find interesting for <br/>
          no apparent reason, but let's not talk <br/>
          about that.<br/><br/>

          Rational fiction, thought experiments, <br/>
          history and the morality of politics are <br/>
          some of the things that interest me (as of <br/>
          right this second) and I do not claim to be <br/>
          adept at any of them. I am however good <br/>
          at a couple of things (including sarcasm, <br/>
          owing to which my friends never think <br/>
          I'm being serious), and those things are <br/>
          or will be listed on this website before <br/>
          the next olympic games.<br/>
          </p>

</div>

      </div> 

      </div>


    </div>
  );
};