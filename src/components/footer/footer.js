import React, { useState } from 'react'

import { HashLink as HLink } from 'react-router-hash-link';

import "./footer.css"

import UseAnimations from "react-useanimations";


const Navbar = () => {

   return (
      <div className="footer">

        <hr className="footer_line"></hr>

        <a href="https://www.github.com/nikxtaco">
         <UseAnimations
        animationKey="github"
        size={"10vw"}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"0", paddingTop: "3vh", marginLeft: "27vw" }}
      />
         </a>
         <a href="https://instagram.com/nikxtaco">
            <UseAnimations
        animationKey="instagram"
        size={"10vw"}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"2vw", paddingTop: "3vh"  }}
      /></a>
         <a href="https://www.linkedin.com/in/nikita-menon-b2248079">
         <UseAnimations
        animationKey="linkedin"
        size={"10vw"}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"2vw", paddingTop: "3vh"  }}
      />
         </a>
         <a href="https://twitter.com/nikxtaco">
         <UseAnimations
        animationKey="twitter"
        size={"10vw"}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"2vw", paddingTop: "3vh", marginBottom:"4vw", marginRight: "27vw" }}
      />
         </a>

        <div>
        <h5 className="footer_link">Copyright © 2020</h5>
        </div>

      </div>
   )
}

export default Navbar