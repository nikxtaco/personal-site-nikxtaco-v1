import React, { useState } from 'react'

import { HashLink as HLink } from 'react-router-hash-link';

import "./navbar.css"

import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"


const Navbar = () => {
   
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
      paddingTop:"30vh",
      width: navbarVisibility ? "100vw" : "0",
   }

   const customNavbarEach = {
      padding: "8px 0 8px 0",
      textDecoration: "none",
      color: "white",
      display: "block",
      transition: "0.3s",
      fontSize: width>750?"10rem":"2rem",
      textAlign: "center",
   }

   return (
      <div className="navbar">

          <HLink to="/">
          {
            width>750?<UseAnimations animationKey="infinity" size={50} style={{ color: "white", cursor: "pointer", marginLeft: "7vw", marginTop: "-16vh", position: "absolute", zIndex: "5" }}/>
            :<UseAnimations animationKey="infinity" size={30} style={{ color: "white", cursor: "pointer", marginLeft: "10vw", marginTop: "-11vh", position: "absolute", zIndex: "5" }}/>
          }
          </HLink>
            
          <div onClick={toggleVisibility}>
          {
            width>750?<UseAnimations animationKey="menu2" size={40} style={{ color: "white", cursor: "pointer", marginLeft: "89vw", marginTop: "-16vh", position: "absolute", zIndex: "5" }}/>
            :<UseAnimations animationKey="menu2" size={30} style={{ color: "white", cursor: "pointer", marginLeft: "85vw", marginTop: "-11vh", position: "absolute", zIndex: "5" }}/>
          }
          </div>

          <div className="navbar" style={customNavbar}>
              <HLink to="/" style={customNavbarEach}>Home</HLink>
              <a href="/projects" style={customNavbarEach}>Projects</a>
              <HLink to="/blog" style={customNavbarEach} >Blog</HLink>
                
              <span>
              <a href="https://www.github.com/nikxtaco">
              {
                width>750?<UseAnimations animationKey="github" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"32.5vw", paddingTop: "10vh" }}/>
                :<UseAnimations animationKey="github" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"15vw", paddingTop: "5vh" }}/>
              }</a>

              <a href="https://instagram.com/nikxtaco">
              {
              width>750?<UseAnimations animationKey="instagram" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
              :<UseAnimations animationKey="instagram" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
              }</a>

              <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
              {
              width>750?<UseAnimations animationKey="linkedin" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
              :<UseAnimations animationKey="linkedin" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
              }</a>
                
              <a href="https://twitter.com/nikxtaco">
              {
              width>750?<UseAnimations animationKey="twitter" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
              :<UseAnimations animationKey="twitter" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
              }</a>
              </span>
          </div>
          
          {/* <div className="look_up_bg">
          <h6 className="look_up" onClick={() => {window.scrollTo(0, 0)}}>
            <UseAnimations
            animationKey="arrowUp"
            size={20}
            style={{ color: "black", cursor: "pointer", padding:"5px", margin:"0", float:"left", paddingBottom:"0"  }}
          />
          </h6>
          </div> */}
      </div>
   )
}

export default Navbar