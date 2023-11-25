import React, {useState, useEffect} from "react";

import "./intro.css"

// import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

// import UseAnimations from "react-useanimations";
import Footer from "../../components/footer/footer.js"


export default function Intro() {

  const { height } = useWindowDimensions();

  const [about] = useState(false);

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
    <div style={{overflowY:"scroll"}}>
      <div id="home" className="main_home_container" >
        <div className="cygirl_picture_mobile"></div>

        <div className="hey_text_div_intro_mobile">
          <h1 className="hey_text_mobile">
            Hey there! <br/>I'm Nikita.
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
        <div className="about_button_intro_mobile">
          ABOUT
        </div>
        </a>

      </div>







      <div id="about" className="about_container_mobile" >

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
          I've got multiple interests and (definitely
          practical) ambitions that I shelter in my
          (arguably) well-organized mind. When
          I'm not doing them or thinking of doing
          them, I spend my time scrolling through 
          art and music pages, burning through the 
          movies and shows on my infinitely long
          recommendation list, or making notes on
          random things that I find interesting for 
          no apparent reason, but let's not talk 
          about that.<br/><br/>

          Rational fiction, thought experiments, 
          history and the morality of politics are 
          some of the things that interest me (as of 
          right this second) and I do not claim to be 
          adept at any of them. I am however good 
          at a couple of things (including sarcasm,
          owing to which my friends never think 
          I'm being serious), and those things are 
          or will be listed on this website before 
          the next olympic games.
          </p>

          <h1 className="about_title2_mobile">
          I try to do<br/>new things
          </h1> 
          <h3 className="about_heading_mobile">
          ...every once in a while.
          </h3>

          <p className="about_content_mobile">
          Besides constantly wishing for a rather 
          peaceful life of a Pokemon trainer running 
          from gym to gym with the sole purpose of 
          collecting badges, I'm also a full-time 
          computer science engineering undergrad 
          who will (hopefully) graduate within the 
          next two years (date of final update, 
          August 2021).<br/><br/>

          Either way, you're more than welcome 
          to reach out to me via any of my handles 
          listed on the site, though I do prefer less 
          anxiety-causing e-mails over them all. 
          Until then, I fare thee well.<br/>
          </p>

</div>


<Footer/>

      </div>


    </div>
  );
};