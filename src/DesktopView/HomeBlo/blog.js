import React, {useState, useEffect} from "react";

// import Scrollable_Blog from '../../pages/Blog/scrollable_blog.js';

import "./blog.css"

import UseAnimations from "react-useanimations";

// import Rellax from "rellax";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

// import birds from "../../media/tree.png" //birds.png
// import feathers from "../../img/feathers_blue.jpg"

export default function Blog() {

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

            {/* THE MAIN BLOG PAGE AND THE ID LINK TO THE BLOGLIST PAGE */}

                <div id="blog" className="main_blog_container" >

                    <div className="page_number">02</div>
                    <div className="dancergirl_picture"></div>

                    <a href="#bloglist" onMouseEnter={()=>setSummaryColor(1)} onMouseLeave={()=>setSummaryColor(0)} className="intro_box">
                        <div className="summary_intro_box_white">
                            <h3 className="summary_heading_white">The Select Few</h3>
                            <h3 className="summary_description_white">If I ever write a book, this is the stuff I’d put in it.</h3>
                            <h3 className="summary_description_white">05</h3>
                            <div style={customSummary}></div>
                        </div>
                    </a>

                    <div className="hey_text_div">
                        <h1 className="hey_text">
                            I write,<br/>sometimes.
                        </h1>
                    </div>

                </div>

            {/* THE BLOGLIST PAGE BELOW THE MAIN INTRO PAGE */}

                <div id="bloglist" className="bloglist_container">

                    <div className="about_bg_image"></div>

                    <div className="bloglist_content">
                      
                        <h1 className="bloglist_heading">
                            “The very substance of the ambitious is merely the shadow of a dream.”
                        </h1>

                        <div className="bloglist_text">
                        <a href="#blog">
                        <div  className="summary_sub_box_white bloglist_sub_box_1">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">External Links</h3>
                                <h3 className="summary_description_white">In the unlikely event that you want to read everything I’ve ever written online and not just the select few, check out these links for 100+ of my pieces.</h3>
                                {/* <h3 className="summary_description_white">02</h3> */}
                            </div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div  className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Instagram Page</h3>
                                <h3 className="summary_description_white">Poetry that I’ve been writing for upwards of 3 years now.</h3>
                                <h3 className="summary_description_white">2-a</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div  className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Medium Page</h3>
                                <h3 className="summary_description_white">Poetry that I’ve been writing for upwards of 3 years now.</h3>
                                <h3 className="summary_description_white">2-b</h3>
                            </div>
                        </div>
                    </a>
                            {/* <p className="bloglist_para_white">
                            I'm a person with multiple, ordinary interests and very little patience for most things, not much unlike every other GenZ kid out there. I like spending time scrolling through art and music pages and not once have I stopped wishing for a rather peaceful life of a Pokemon trainer. I try to learn new things every once in a while when the realization that having deep and wise thoughts all the time isn't going to get me anywhere, dawns on me.
                            </p>

                            <p className="bloglist_para_white">
                            Vague content aside, I'm a Sophomore Computer Science Engineering student, currently studying in MEC, Kochi. 
                            At the moment, I'm juggling between things I like doing and since these things change rather often, I'd prefer you asked me in person if you wanted to know more, than me try to list them out here. So yeah, I'm just another person who wants to do it all. Inefficient and time consuming? Yes. But then again, I have time to kill. Or do I?
                            </p>

                            <p className="bloglist_para_white">
                            Either way, you're free to reach out to me via any of my social media handles, though I do prefer traditional e-mails over them all. Until then, cheers!
                            </p> */}
                        </div>

                    </div>

                    {/* <div className="about_circle"></div>
                    <div className="about_circle_text">about</div> */}
                    <div className="about_circle2"></div>
                    <a href="#blog" className="scrollup_x">
                        <UseAnimations animationKey="arrowUp" onClick={()=>{console.log("hi")}} size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", paddingTop: "0vh" }}/>
                    </a>

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
    );
};