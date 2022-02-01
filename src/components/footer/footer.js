import React from 'react'

import "./footer.css"

import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

const Navbar = () => {

   const { width } = useWindowDimensions();

   return (
      <div className="footer">

        <hr className="footer_line"></hr>

         <div>
        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer">
              {
                width>991?<UseAnimations animationKey="github" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"32.5vw", paddingTop: "10vh" }}/>
                :<UseAnimations animationKey="github" size={"10vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"8vw", paddingTop: "5vh", paddingBottom:"5vh" }}/>
              }</a>

              <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
              {
              width>991?<UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
              :<UseAnimations animationKey="instagram" size={"10vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
              }</a>

              <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
              {
              width>991?<UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
              :<UseAnimations animationKey="linkedin" size={"10vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
              }</a>
                
              <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
              {
              width>991?<UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
              :<UseAnimations animationKey="twitter" size={"10vmin"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
              }</a>
         </div>

        <h2 className="footer_link">Copyright © Made by Nikita</h2>

      </div>
   )
}

export default Navbar