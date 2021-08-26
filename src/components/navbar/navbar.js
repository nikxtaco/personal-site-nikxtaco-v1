import React, { useState } from 'react'

import { HashLink as HLink } from 'react-router-hash-link';

import "./navbar.css"

import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"


const Navbar = () => {
   
   const [navbarVisibility, setNavbarVisibility] = useState(false);
   const { width, height } = useWindowDimensions();

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
      paddingTop:"30vh",
      width: navbarVisibility ? "100vw" : "0",
   }

   const customNavbarEach = {
      padding: "8px 0 8px 0",
      textDecoration: "none",
      color: "white",
      display: "block",
      transition: "0.3s",
      fontSize: width>1440?"10rem":"2rem",
      textAlign: "center",
   }

   return (
      <div className="navbar" style={{position:"fixed", marginLeft:0, marginTop:0}}>

          <HLink to="/" onClick={window.scrollTo(0,0)}>
          {
            width>1440?<UseAnimations animationKey="infinity" size={50} style={{ color: "white", cursor: "pointer", marginLeft: "7vw", marginTop: "10vh", position: "absolute", zIndex: "5" }}/>
            :<UseAnimations animationKey="infinity" size={30} style={{ color: "white", cursor: "pointer", marginLeft: "10vw", marginTop: "-11vh", position: "absolute", zIndex: "5" }}/>
          }
          </HLink>
            
          <div onClick={toggleVisibility}>
          {
            width>1440?<UseAnimations animationKey="menu2" size={40} style={{ color: "white", cursor: "pointer", marginLeft: "89vw", marginTop: "10vh", position: "absolute", zIndex: "5" }}/>
            :<UseAnimations animationKey="menu2" size={30} style={{ color: "white", cursor: "pointer", marginLeft: "85vw", marginTop: "-11vh", position: "absolute", zIndex: "5" }}/>
          }
          </div>

          <div className="navbar" style={customNavbar}>
              <HLink to="/" style={customNavbarEach}>Home</HLink>
              <HLink to="/projects" style={customNavbarEach}>Projects</HLink>
              <HLink to="/blog" style={customNavbarEach} >Blog</HLink>
                
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
          
          {width>1440?
          <div className="look_up_bg" style={{position:"fixed"}}>
          <h6 className="look_up" onClick={() => {window.scrollBy({ left: width, behavior: 'smooth'});}}>
            <UseAnimations
            animationKey="arrowUp"
            size={40}
            style={{ color: "black", cursor: "pointer", padding:"5px", margin:"0", float:"left", paddingBottom:"0"  }}
          />
          </h6>
          </div>
          :null}
          
      </div>
   )
}

export default Navbar