import React from 'react'

import "./footer.css"

import UseAnimations from "react-useanimations";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

const Navbar = () => {

   const { width } = useWindowDimensions();

   return (
      <div className="footer">

        <hr className="footer_line"></hr>

        <a href="https://www.github.com/nikxtaco">
      {
      width>750?
      <UseAnimations
      animationKey="github"
      size={"5vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"0", paddingTop: "10vh", marginLeft: "27vw" }}
      />:
      <UseAnimations
      animationKey="github"
      size={"10vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"0", paddingTop: "3vh", marginLeft: "27vw" }}
       />
      }
         </a>
         <a href="https://instagram.com/nikxtaco">
       {
      width>750?
      <UseAnimations
      animationKey="instagram"
      size={"5vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh"}}
      />:
      <UseAnimations
      animationKey="instagram"
      size={"10vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"2vw", paddingTop: "3vh"}}
       />
      }
      </a>
         <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
         {
      width>750?
      <UseAnimations
      animationKey="linkedin"
      size={"5vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh"}}
      />:
      <UseAnimations
      animationKey="linkedin"
      size={"10vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"2vw", paddingTop: "3vh"}}
       />
      }
         </a>
         <a href="https://twitter.com/nikxtaco">
            {
      width>750?
      <UseAnimations
      animationKey="twitter"
      size={"5vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh", marginBottom:"5vw", marginRight: "27vw" }}
      />:
      <UseAnimations
      animationKey="twitter"
      size={"10vw"}
      style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"2vw", paddingTop: "3vh", marginBottom:"4vw", marginRight: "27vw" }}
    />
      }
         </a>

        <div>
        <h5 className="footer_link">Copyright © Made by Nikita</h5>
        </div>

      </div>
   )
}

export default Navbar