import React, { useEffect } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { HashLink as HLink } from 'react-router-hash-link';

import img from "../../../media/logo.svg"

import "./navbar.css"

const Navbar = () => {
   useEffect(() => {
      const sidenav = document.querySelector("#mobile-nav");
      M.Sidenav.init(sidenav, {});
   }, [])

   const links = [
      { id: 1, Name: 'Home', to: '/#home' },
      { id: 2, Name: 'Team', to: '/team' },
      { id: 3, Name: 'Contact', to: '/#contact' },
      { id: 4, Name: 'Log In', to: '/login' },
   ]

   return (
      <div className="navbar">
         <div className="navbar-fixed">
            <nav className="nav-wrapper " style={{ "background-color": "#5B43EF" }}>
               <div className="container">
                  <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                     <i className="material-icons" style={{ color: "#dfdfdf" }}>menu</i>
                  </a>
                  <img src={img} alt="" className="logo"/>
                  <ul className="right hide-on-med-and-down" >
                     {links.map(link => (
                        <li key={link.id}>
                           <HLink style={{'color':'#dfdfdf'}} to={link.to} >{link.Name}</HLink>
                        </li>
                     ))}
                  </ul>
               </div>
            </nav>
         </div>

         <ul className="sidenav" id='mobile-nav' style={{ "background-color": "#5B43EF", 'padding-top':'20vh' }}>
            {links.map(link => (
               <li key={link.id} >
                  <HLink className='white-text' style={{'margin':'5vh 0', 'text-align':'center'}}
                  to={link.to} >{link.Name}</HLink>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Navbar