import React, {useState, useEffect} from "react";
import { HashLink as HLink } from 'react-router-hash-link';
import UseAnimations from "react-useanimations";
import './navigation.css';
import Home_Intro from "../HomeIntro/intro.js"
import Home_Blog from "../HomeBlog/blog.js"

export default () => {

   const [index, setIndex] = useState(1);
   const [homeColor, setHomeColor] = useState(1)
   const [blogColor, setBlogColor] = useState(0)

   useEffect(() => {
    if(index===1)
    {
        window.scrollTo(0, 0)
        setHomeColor(1)
        setBlogColor(0)
    }
    if(index===2)
    {
        window.scrollBy({top:0,left:window.innerWidth})
        setBlogColor(1)
        setHomeColor(0)
    }
  }, [index])

  const [navbarVisibility, setNavbarVisibility] = useState(true);

   function toggleVisibility(){
      setNavbarVisibility(!navbarVisibility)
   }

   const customHome = {
      color: homeColor ? "white" : "#878787",
   }

   const customBlog = {
    color: blogColor ? "white" : "#878787",
    }

    return (
        <div>          
        <div className="navbar">

            <HLink to="/" onClick={()=>{{setIndex(1); window.scrollTo(0,0)}}}>
                <UseAnimations animationKey="infinity" size={50} className="infinity_logo"/>
            </HLink>
                
            <div onClick={window.scrollTo(0,0)}>
                <UseAnimations animationKey="twitter" size={40} className="menu_logo"/>
            </div>

            <div className="NavbarListStyles">
                <li onClick={()=>setIndex(1)} style={customHome}>Home</li>
                <li>&nbsp;/&nbsp;</li>
                <li onClick={()=>setIndex(2)} style={customBlog}>Blog</li>
                {/* <li>&nbsp;/&nbsp;</li>
                <li>Art</li> */}
            </div>

        </div>          

        <div className="home_slides">
            <Home_Intro/>
            <Home_Blog/>
        </div>

      </div>          
    );
  
}