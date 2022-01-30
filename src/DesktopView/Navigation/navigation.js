// CONTAINS CODE FOR STRIPE DESIGN, TOP NAVBAR AND NAVIGATION BETWEEN PAGES & COMPONENT CALLS FOR EVERY OTHER PAGE

import React, {useState, useEffect} from "react";
import useWindowDimensions from "../../helpers/WindowDimensions.js"
import './navigation.css'
import HomeIntro from "../HomeIntro/intro.js";
import HomeBlog from "../HomeBlo/blog.js";
import HomeProjects from "../HomeProjects/projects.js";
import HomeArt from "../HomeArt/art.js";

export default function Navigation() {

    const { width } = useWindowDimensions();

    const [index, setIndex] = useState(1);
    const [homeColor, setHomeColor] = useState(0)
    const [projectsColor, setProjectsColor] = useState(1)
    const [blogColor, setBlogColor] = useState(0)
    const [artColor, setArtColor] = useState(0)

    // ALLOWS NAVIGATION BETWEEN THE FOUR MAIN PAGES

    useEffect(() => {
      if(index===1)
      {
          window.scrollTo({top:0,left:0})
          setBlogColor(0)
          setProjectsColor(0)
          setArtColor(0)
      }
      if(index===2)
      {
          window.scrollTo({top:0,left:width})
          setBlogColor(1)
          setProjectsColor(0)
          setArtColor(0)
      }
      if(index===3)
      {
          window.scrollTo({top:0,left:width*2})
          setProjectsColor(1)
          setBlogColor(0)
          setArtColor(0)
      }
      if(index===4)
      {
          window.scrollTo({top:0,left:width*3})
          setArtColor(1)
          setBlogColor(0)
          setProjectsColor(0)
      }
    }, [index, width])

    // CREATES THE HOVER ANIMATION OF THE TOP NAVBAR FOR ALL PAGES

    const customHome = {
      width:"12vw",
      height:"2px",
      background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: homeColor? "left bottom" : "right bottom",
    }
   const customProjects = {
    // borderTop: projectsColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.1)",
    borderTop: "2px solid rgba(255, 255, 255, 0.1)", 
    }
   const customBlog = {
    // borderTop: blogColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.1)",
    borderTop: "2px solid rgba(255, 255, 255, 0.1)",
    }
    const customArt = {
    // borderTop: artColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.1)",
    borderTop: "2px solid rgba(255, 255, 255, 0.1)",
    }

    return (
        <div>          

            {/* STRIPE DESIGN FOR ALL PAGES */}

                <div className="stripe_design">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_00">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_02">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_02a">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <a href="#blog"><div onClick={()=>setIndex(2)} className="back_to_home">Back To Blog</div></a>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_03">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>
                
                <div className="stripe_design stripes_slide_03a">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <a href="#projects"><div onClick={()=>setIndex(3)} className="back_to_home">Back To Projects</div></a>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>
                
                <div className="stripe_design stripes_slide_04">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

            {/* TOP NAVBAR FOR ALL MAIN PAGES (HOME, BLOG, PROJECTS, ART) */}

                <div className="summary_box">
                    <a href="#blog">
                        <div onClick={()=>setIndex(2)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div onClick={()=>setIndex(3)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn cool stuff.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Art</h3>
                                <h3 className="summary_description_white">I hardly have any color sense so I make do in monochrome.</h3>
                                <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="summary_box slide2">
                    <a href="#home">
                        <div  onClick={()=>setIndex(1)} onMouseEnter={()=>setHomeColor(1)} onMouseLeave={()=>setHomeColor(0)} className="summary_sub_box_white backtohometext">
                            <h3 className="summary_heading_white">Home</h3>
                            <h3 className="backtohometext2">01</h3>
                            <div style={customHome}></div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div  onClick={()=>setIndex(2)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div onClick={()=>setIndex(3)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn cool stuff.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Art</h3>
                                <h3 className="summary_description_white">I hardly have any color sense so I make do in monochrome.</h3>
                                <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="summary_box slide3">
                    <a href="#home">
                        <div  onClick={()=>setIndex(1)} onMouseEnter={()=>setHomeColor(1)} onMouseLeave={()=>setHomeColor(0)} className="summary_sub_box_white backtohometext">
                            <h3 className="summary_heading_white">Home</h3>
                            <h3 className="backtohometext2">01</h3>
                            <div style={customHome}></div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div  onClick={()=>setIndex(2)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div onClick={()=>setIndex(3)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn cool stuff.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Art</h3>
                                <h3 className="summary_description_white">I hardly have any color sense so I make do in monochrome.</h3>
                                <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="summary_box slide4">
                    <a href="#home">
                        <div  onClick={()=>setIndex(1)} onMouseEnter={()=>setHomeColor(1)} onMouseLeave={()=>setHomeColor(0)} className="summary_sub_box_white backtohometext">
                            <h3 className="summary_heading_white">Home</h3>
                            <h3 className="backtohometext2">01</h3>
                            <div style={customHome}></div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div  onClick={()=>setIndex(2)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div onClick={()=>setIndex(3)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn cool stuff.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                            <h3 className="summary_heading_white">Art</h3>
                            <h3 className="summary_description_white">I hardly have any color sense so I make do in monochrome.</h3>
                            <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

            {/* CALLING COMPONENTS FOR ALL MAIN PAGES */}

                <div className="home_slides">
                    <HomeIntro/>
                    <HomeBlog/>
                    <HomeProjects/>
                    <HomeArt/>
                </div>
        </div>          
    )
}