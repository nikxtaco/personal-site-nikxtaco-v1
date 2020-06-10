import React, { useState } from 'react'

import { HashLink as HLink } from 'react-router-hash-link';

import "./navbar.css"

import UseAnimations from "react-useanimations";


const Navbar = () => {

   const links = [
      { id: 1, Name: 'Home', to: '/#home' },
      { id: 2, Name: 'Team', to: '/team' },
      { id: 3, Name: 'Contact', to: '/#contact' },
      // { id: 4, Name: 'Log In', to: 'https://dash.alrt.ai' },
   ];
   
   const [navbarVisibility, setNavbarVisibility] = useState(false);

   function toggleVisibility(){
      setNavbarVisibility(!navbarVisibility)
      console.log(navbarVisibility)
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
      transition: "0.5s",
      paddingTop: "50vh",
      width: navbarVisibility ? "100vw" : "0",
   }

   const customNavbarA = {
      padding: "8px 8px 8px 32px",
      textDecoration: "none",
      fontSize: "25px",
      color: "white",
      display: "block",
      transition: "0.3s",
   }

   const customNavbarAHover = {
      color: "#f1f1f1",
   }

   return (
      <div className="navbar">
        
        <div onClick={toggleVisibility}>
      <UseAnimations
        animationKey="menu2"
        size={30}
        style={{ color: "white", cursor: "pointer", marginLeft: "85vw", marginTop: "3vh", position: "relative", zIndex: "5" }}
      />
       </div>

       <div className="navbar" style={customNavbar}>
         <a href="" style={customNavbarA} onHover={""}>Home</a>
         <a href="" style={customNavbarA} onHover={""}>About</a>
         <a href="" style={customNavbarA} onHover={""}>Blog</a>
         <a href="" style={customNavbarA} onHover={""}>Contact</a>
         <span>
         <a href="" style={customNavbarA}>
         <UseAnimations
        animationKey="github"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" }}
      />
         </a>
         <a href="" style={customNavbarA}>
            <UseAnimations
        animationKey="instagram"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10px" }}
      /></a>
         <a href="" style={customNavbarA}>
         <UseAnimations
        animationKey="linkedin"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10px" }}
      />
         </a>
         <a href="" style={customNavbarA}>
         <UseAnimations
        animationKey="twitter"
        size={30}
        style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10px" }}
      />
         </a>
         </span>
       </div>

      </div>
   )
}

export default Navbar



// return (
//    <div className="navbar">
//       <div className="navbar-fixed">
//          <nav className="nav-wrapper " style={{ "background-color": "#5B43EF" }}>
//             <div className="container">
//                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
//                   <i className="material-icons" style={{ color: "#dfdfdf" }}>menu</i>
//                </a>
//                <img src={img} alt="" className="logo"/>
//                <ul className="right hide-on-med-and-down" >
//                   {links.map(link => (
//                      <li key={link.id}>
//                         <HLink style={{'color':'#dfdfdf'}} to={link.to} >{link.Name}</HLink>
//                      </li>
//                   ))}
//                   <li >
//                      <a style={{'color':'#dfdfdf'}} href={"https://dash.alrt.ai"} >{"Login"}</a>
//                   </li>

//                </ul>
//             </div>
//          </nav>
//       </div>

//       <ul className="sidenav" id='mobile-nav' style={{ "background-color": "#5B43EF", 'padding-top':'20vh' }}>
//          {links.map(link => (
//             <li key={link.id} >
//                <HLink className='white-text' style={{'margin':'5vh 0', 'text-align':'center'}}
//                to={link.to} >{link.Name}</HLink>
//             </li>
//          ))}
//       </ul>
//    </div>
// )
