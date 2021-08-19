import React, {useState, useEffect} from "react";
import { HashLink as HLink } from 'react-router-hash-link';
import UseAnimations from "react-useanimations";
import './navigation.css';
import HomeIntro from "../HomeIntro/intro.js"
// import HomeBlog from "../HomeBlog/blog.js"
import HomeBlog from "../HomeBlo/blog.js"
import HomeProjects from "../HomeProjects/projects.js"
import HomeArt from "../HomeArt/art.js"

import useWindowDimensions from "../../helpers/WindowDimensions.js"


export default function Navigation() {

   const { width, height } = useWindowDimensions();

   const [index, setIndex] = useState(1);
   const [projectsColor, setProjectsColor] = useState(1)
   const [blogColor, setBlogColor] = useState(0)
   const [artColor, setArtColor] = useState(0)

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

  const [pageUp, setPageUp] = useState(false);

  useEffect(() => {
    if(pageUp===true)
    {
        window.scrollBy({top:-height,left:0})
        setPageUp(false)
    }
  }, [pageUp])

  // const customProjects = {
  //   borderTop: projectsColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.6)",
  //  }

  //  const customBlog = {
  //   borderTop: blogColor? "2px solid black" : "2px solid rgba(0, 0, 0, 0.6)",
  //   }

  //   const customArt = {
  //   borderTop: artColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.6)",
  //   }

  //   const customProjects2 = {
  //     borderTop: projectsColor? "2px solid black" : "2px solid rgba(0, 0, 0, 0.6)",
  //    }
  
  //    const customBlog2 = {
  //     borderTop: blogColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.6)",
  //     }
  
  //     const customArt2 = {
  //     borderTop: artColor? "2px solid black" : "2px solid rgba(0, 0, 0, 0.6)",
  //     }

   const customProjects = {
    borderTop: projectsColor? "4px solid white" : "4px solid rgba(255, 255, 255, 0.3)",
   }

   const customBlog = {
    borderTop: blogColor? "4px solid white" : "4px solid rgba(255, 255, 255, 0.3)",
    }

    const customArt = {
    borderTop: artColor? "4px solid white" : "4px solid rgba(255, 255, 255, 0.3)",
    }

    return (
        <div>          
        {/* <div className="navbar">
            <HLink to="/" onClick={()=>{setIndex(1); window.scrollTo(0,0)}}>
                <UseAnimations animationKey="infinity" size={"3vw"} className="infinity_logo"/>
            </HLink>

            <div>
                <UseAnimations animationKey="menu2" size={"3vw"} className="menu_logo"/>
            </div>
                
            <div>
                <UseAnimations animationKey="twitter" size={"3vw"} className="contact_logo"/>
            </div>

        </div>     */}

      <div className="stripe_design">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div className="stripe_design stripes_slide_02">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <a href="#home"><div onClick={()=>setIndex(1)} className="back_to_home">Back To Home</div></a>
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
        <a href="#home"><div onClick={()=>setIndex(1)} className="back_to_home">Back To Home</div></a>
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
        <a href="#home"><div onClick={()=>setIndex(1)} className="back_to_home">Back To Home</div></a>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>


        <div className="summary_box">
        <a href="#blog">
        <div onClick={()=>setIndex(2)} className="summary_sub_box_white" style={customBlog} >
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
      <a href="#blog">
        <div  onClick={()=>setIndex(2)} className="summary_sub_box_white" style={customBlog} >
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
      <a href="#blog">
        <div  onClick={()=>setIndex(2)} className="summary_sub_box_white" style={customBlog} >
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
      <a href="#blog">
        <div  onClick={()=>setIndex(2)} className="summary_sub_box_white" style={customBlog} >
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


        <div className="home_slides">
            <div className="intro_container"><HomeIntro/></div>
            <div className="blog_container"><HomeBlog/></div>
            <div className="projects_container"><HomeProjects/></div>
            <div className="art_container"><HomeArt/></div>
        </div>



      </div>          
    );
  
}