import React, {useState} from "react";
import "./intro.css"
import UseAnimations from "react-useanimations";

export default function Intro() {

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
    
    return (
        <div>

            {/* THE MAIN INTRO PAGE AND THE ID LINK TO THE ABOUT PAGE */}

                <div id="home" className="main_home_container">

                    <div className="page_number">01</div>
                    <div className="cygirl_picture"></div>

                    <a href="#about" onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
                        <div className="summary_intro_box_white">
                            <h3 className="summary_heading_white_bottom">About</h3>
                            {/* <h3 className="summary_description_white">I sometimes wonder who I am myself as well.</h3> */}
                            <h3 className="summary_description_white_bottom">00</h3>
                            <div style={customSummary}></div>
                        </div>
                    </a>

                    <div className="hey_text_div">
                        <h1 className="hey_text">
                            Hey there!<br/>I'm Nikita.
                        </h1>
                    </div>

                </div>
            
            {/* THE ABOUT PAGE BELOW THE MAIN INTRO PAGE */}


            <div id="about" className="about_container" >

                <div className="about_all_content">

                    <div>
                        <h3 className="about_heading">
                        - ABOUT
                        </h3>
                        <h1 className="about_title1">
                        I'm an<br/>aspiring...
                        </h1> 
                        <h3 className="about_heading">
                        bit of pretty much everything.
                        </h3>

                        <p className="about_content">
                        I've got multiple interests and (definitely practical) ambitions that I
                        shelter in my (arguably) well-organized mind. When I'm not doing
                        them or thinking of doing them, I spend my time scrolling through 
                        art and music pages, burning through the movies and shows on my
                        infinitely long recommendation list, or making notes on random
                        things that I find interesting for no apparent reason, but let's not
                        talk about that.<br/><br/>

                        Rational fiction, thought experiments, history and the morality of 
                        politics are some of the things that interest me (as of right this 
                        second) and I do not claim to be adept at any of them. I am however
                        good at a couple of things (including sarcasm, owing to which my 
                        friends never think I'm being serious), and those things are or will
                        be listed on this website before the next olympic games.<br/>
                        </p>

                        <h1 className="about_title2">
                        I try to do<br/>new things
                        </h1> 
                        <h3 className="about_heading">
                        ...every once in a while.
                        </h3>

                        <p className="about_content">
                        Besides constantly wishing for a rather peaceful life of a Pokemon
                        trainer running from gym to gym with the sole purpose of collecting
                        badges, I'm also a full-time computer science engineering undergrad
                        who will (hopefully) graduate within the next two years (date of final
                        update, August 2021).<br/><br/>

                        edit: it is now 2023 and i have graduated! <br/><br/>

                        Either way, you're more than welcome to reach out to me via any of my
                        handles listed on the site, though I do prefer less anxiety-causing
                        e-mails over them all. <br/><br/>
                        
                        Until then, I fare thee well.<br/>
                        </p>
                        <br/><br/>

                    </div>

                </div> 

                <div className="about_contact_links">
                    <a href="#home">
                        <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0"}}/>
                    </a>
                    <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                </div>
            </div>
        </div>
    )
}