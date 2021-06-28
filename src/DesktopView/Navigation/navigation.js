import React, {useState, useEffect} from "react";
import { HashLink as HLink } from 'react-router-hash-link';
import UseAnimations from "react-useanimations";
import './navigation.css';
import HomeIntro from "../HomeIntro/intro.js"
import HomeBlog from "../HomeBlog/blog.js"
import HomeArt from "../HomeArt/art.js"

import useWindowDimensions from "../../helpers/WindowDimensions.js"


export default () => {

   const { width } = useWindowDimensions();

   const [index, setIndex] = useState(1);
   const [projectsColor, setProjectsColor] = useState(1)
   const [blogColor, setBlogColor] = useState(0)
   const [artColor, setArtColor] = useState(0)

   useEffect(() => {
    if(index===1)
    {
        window.scrollBy({top:0,left:0})
        setBlogColor(0)
        setProjectsColor(0)
        setArtColor(0)
    }
    if(index===2)
    {
        window.scrollBy({top:0,left:width})
        setBlogColor(1)
        setProjectsColor(0)
        setArtColor(0)
    }
    if(index===3)
    {
        window.scrollBy({top:0,left:width*2})
        setProjectsColor(1)
        setBlogColor(0)
        setArtColor(0)
    }
    if(index===4)
    {
        window.scrollBy({top:0,left:width*3})
        setArtColor(1)
        setBlogColor(0)
        setProjectsColor(0)
    }
  }, [index])

   const customProjects = {
    borderTop: projectsColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.6)",
   }

   const customBlog = {
    borderTop: blogColor? "2px solid black" : "2px solid rgba(0, 0, 0, 0.6)",
    }

    const customArt = {
    borderTop: artColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.6)",
    }

    return (
        <div>          
        <div className="navbar">
            <HLink to="/" onClick={()=>{setIndex(1); window.scrollTo(0,0)}}>
                <UseAnimations animationKey="infinity" size={"3vw"} className="infinity_logo"/>
            </HLink>

            <div>
                <UseAnimations animationKey="menu2" size={"3vw"} className="menu_logo"/>
            </div>
                
            <div>
                <UseAnimations animationKey="twitter" size={"3vw"} className="contact_logo"/>
            </div>

        </div>    

        <div className="main_background_container"></div>  
        <div className="side_background_container"></div>
        <div className="summary_box">
        <div  onClick={()=>setIndex(2)} className="summary_sub_box_black" style={customBlog} >
          <h3 className="summary_heading_black">Blog</h3>
          <h3 className="summary_description_black">Everything from deep poetry to pointless ramblings.</h3>
          <h3 className="summary_description_black">01</h3>
        </div>
        <div onClick={()=>setIndex(3)} style={customProjects} className="summary_sub_box_white">
          <h3 className="summary_heading_white">Projects</h3>
          <h3 className="summary_description_white">Things I ended up with while trying to learn cool stuff.</h3>
          <h3 className="summary_description_white">02</h3>
        </div>
        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
          <h3 className="summary_heading_white">Art</h3>
          <h3 className="summary_description_white">I hardly have any color sense so I make do in monochrome.</h3>
          <h3 className="summary_description_white">03</h3>
        </div>
      </div>
        <div className="home_slides" style={{maxHeight:"100vh"}}>
            <div className="intro_container"><HomeIntro/></div>
            <div className="blog_container"><HomeBlog/></div>
            <div className="blog_container"><HomeArt/></div>
        </div>



      </div>          
    );
  
}