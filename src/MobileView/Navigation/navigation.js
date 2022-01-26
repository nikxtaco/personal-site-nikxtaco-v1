import React, {useState, useEffect} from "react";
import { HashLink as HLink } from 'react-router-hash-link';
import UseAnimations from "react-useanimations";
import './navigation.css';
import HomeIntro from "../HomeIntro/intro.js"
import HomeProjects from "../HomeProjects/projects.js"
import HomeArt from "../HomeArt/art.js"
import HomeBlog from "../HomeBlo/blog.js"

import useWindowDimensions from "../../helpers/WindowDimensions.js"


export default function Navigation() {

  const [navbarVisibility, setNavbarVisibility] = useState(false);
  const { width } = useWindowDimensions();

  function toggleVisibility(){
     setNavbarVisibility(!navbarVisibility)
  }

  const customNavbar = {
     backgroundColor: "#000000cc",
     fontFamily:"'Poppins',sans-serif",
     height: "100%",
     position: "fixed",
     zIndex: 1,
     top: 0,
     left: 0,
     overflowX: "hidden",
     paddingTop:"25vh",
     width: navbarVisibility ? "100vw" : "0",
  }

  const customNavbarEach = {
     padding: "8px 0 8px 0",
     textDecoration: "none",
     color: "white",
     display: "block",
     transition: "0.3s",
     fontSize: width>1440?"10rem":"7rem",
     textAlign: "center",
  }

  return ( 
    <div>
     <div className="mobile_navbar">
         <a href="#home">
         {
           <UseAnimations animationKey="infinity" size={30} style={{ color: "white", cursor: "pointer", marginLeft: "7vw", marginTop: "5vh", position: "absolute", zIndex: "1z" }}/>
         }
         </a>
           
           {navbarVisibility && 
         <div onClick={toggleVisibility}>
         {
           <UseAnimations animationKey="menu2" size={25} style={{ color: "white", cursor: "pointer", marginLeft: "87vw", marginTop: "5.5vh", position: "absolute", zIndex: "5" }}/>
         }
         </div>
        }

{!navbarVisibility && 
         <div onClick={toggleVisibility}>
         {
           <UseAnimations animationKey="menu2" size={25} style={{ color: "white", cursor: "pointer", marginLeft: "87vw", marginTop: "5.5vh", position: "absolute", zIndex: "5" }}/>
         }
         </div>
        }
         <div style={customNavbar}>
             <a href="#home" onClick={toggleVisibility} style={customNavbarEach}>Home</a>
             <a href="#blog" onClick={toggleVisibility} style={customNavbarEach} >Blog</a>
             <a href="#projects" onClick={toggleVisibility} style={customNavbarEach}>Projects</a>
             <a href="#art" onClick={toggleVisibility} style={customNavbarEach} >Music</a>
             <HLink to="/about" style={customNavbarEach} >About</HLink>
               
             <span>
             <a href="https://www.github.com/nikxtaco">
             {
               width>1440?<UseAnimations animationKey="github" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"32.5vw", paddingTop: "10vh" }}/>
               :<UseAnimations animationKey="github" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"15vw", paddingTop: "5vh" }}/>
             }</a>

             <a href="https://instagram.com/nikxtaco">
             {
             width>1440?<UseAnimations animationKey="instagram" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
             :<UseAnimations animationKey="instagram" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
             }</a>

             <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
             {
             width>1440?<UseAnimations animationKey="linkedin" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
             :<UseAnimations animationKey="linkedin" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
             }</a>
               
             <a href="https://twitter.com/nikxtaco">
             {
             width>1440?<UseAnimations animationKey="twitter" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
             :<UseAnimations animationKey="twitter" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
             }</a>
             </span>
         </div>

         </div>
         
         <div className="home_slides">
            <div className="intro_container"><HomeIntro/></div>
            <div className="blog_container"><HomeBlog/></div>
            <div className="art_container"><HomeArt/></div>
            <div className="projects_container"><HomeProjects/></div>
        </div>
         
     </div>  
    );
  
}