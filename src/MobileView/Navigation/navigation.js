import React, {useState, useEffect} from "react";
// import { HashLink as HLink } from 'react-router-hash-link';
import UseAnimations from "react-useanimations";
import './navigation.css';
import HomeIntro from "../HomeIntro/intro.js"
import HomeProjects from "../HomeProjects/projects.js"
import HomeArt from "../HomeArt/art.js"
import HomeBlog from "../HomeBlo/blog.js"
import SpotlightSearch from "../../DesktopView/components/SpotlightSearch.js"
import MobileNotice from "../components/MobileNotice.js"

import useWindowDimensions from "../../helpers/WindowDimensions.js"
// import smooth from "react-scroll/modules/mixins/smooth";


export default function Navigation() {

  const [navbarVisibility, setNavbarVisibility] = useState(false);
  const { width } = useWindowDimensions();

  function toggleVisibility(){
     setNavbarVisibility(!navbarVisibility)
  }

  // The fixed header should match the page under it: light on the light detail
  // pages (About / Blog / Research), dark on the heroes and the dark Art detail.
  // Sample the element just below the header and see if it's inside a light detail.
  const [navTheme, setNavTheme] = useState("dark");
  useEffect(() => {
     // sample the element just below the 12vh header; if it's inside a light
     // detail page, theme the header light. Called directly (no rAF — rAF is
     // starved in some automated contexts); setNavTheme only re-renders on a
     // real change, so running it per scroll event is cheap.
     const sample = () => {
        const el = document.elementFromPoint(
           Math.round(window.innerWidth / 2),
           Math.round(window.innerHeight * 0.15)
        );
        const light = !!(el && el.closest && el.closest(".about_m, .bloglist_m, .projects_m"));
        setNavTheme(light ? "light" : "dark");
     };
     window.addEventListener("scroll", sample, { capture: true, passive: true });
     window.addEventListener("hashchange", sample);
     const t = setTimeout(sample, 400);
     return () => {
        window.removeEventListener("scroll", sample, { capture: true });
        window.removeEventListener("hashchange", sample);
        clearTimeout(t);
     };
  }, []);
  const iconColor = navTheme === "light" ? "#1a1a1a" : "white";
  const navBg = navTheme === "light" ? "#e9e5db" : "#141414";

  // Spotlight navigation on mobile: the layout is the horizontal-slide layout,
  // so fragment nav (window.location.hash = id) scrolls to any section/element.
  const spotlightNavigate = (item) => {
     if (item.url) { window.open(item.url, "_blank", "noopener,noreferrer"); return; }
     const go = (id) => { if (id) window.location.hash = id; };
     // native on-site post (blog or research): open it, then jump to its listing
     if (item.entryId && item.native) {
        window.dispatchEvent(new CustomEvent("spotlight-open-post", { detail: { id: item.entryId } }));
        setTimeout(() => go(item.elementId || "bloglist"), 60);
        return;
     }
     // the mobile Research Updates feed is paginated, so jump to the feed itself
     if (item.elementId && item.elementId.indexOf("about-update-") === 0) { go("about"); return; }
     // external cross-post: jump to its section, then flash its card if present
     if (item.entryId && !item.native) {
        go(item.elementId || "bloglist");
        setTimeout(() => {
           const card = document.getElementById("card-" + item.entryId);
           if (card) { card.classList.add("card_flash"); setTimeout(() => card.classList.remove("card_flash"), 1600); }
        }, 500);
        return;
     }
     go(item.elementId);
  };

  const customNavbar = {
     backgroundColor: "#000000f8",
     fontFamily:"'Rozha One',sans-serif",
     height: "100%",
     position: "fixed",
     zIndex: 1,
     top: 0,
     left: 0,
     overflowX: "hidden",
     paddingTop:"25vh",
     transition: "all 0.25s ease",
     transitionDelay: navbarVisibility ? "0s" : "1s",
     width: navbarVisibility ? "100vw" : "0",
  }

  const customNavbarEach = {
     padding: "8px 0 15px 0",
     textDecoration: "none",
     color: "white",
     display: "block",
     transition: "0.3s",
     fontSize: width>991?"10rem":"7rem",
     textAlign: "center",
  }

  return (
    <div>
     <MobileNotice/>
     <div className="mobile_navbar" style={{backgroundColor: navbarVisibility ? '#141414' : navBg, transition: 'background-color 0.25s ease'}}>
         <a href="/">
         {
           <UseAnimations animationKey="infinity" size={30} style={{ color: navbarVisibility ? "white" : iconColor, cursor: "pointer", marginLeft: "7vw", marginTop: "5vh", position: "absolute", zIndex: "1z" }}/>
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
           <UseAnimations animationKey="menu2" size={25} style={{ color: iconColor, cursor: "pointer", marginLeft: "87vw", marginTop: "5.5vh", position: "absolute", zIndex: "5" }}/>
         }
         </div>
        }
         <div style={customNavbar}>
             <a href="/" onClick={toggleVisibility} style={customNavbarEach}>Home</a>
             <a href="#projects" onClick={toggleVisibility} style={customNavbarEach}>Research & Projects</a>
             <a href="#blog" onClick={toggleVisibility} style={customNavbarEach} >Blog</a>
             <a href="#art" onClick={toggleVisibility} style={customNavbarEach} >Art & Music</a>
               
             <span>
             <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer">
             {
               width>991?<UseAnimations animationKey="github" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"32.5vw", paddingTop: "10vh" }}/>
               :<UseAnimations animationKey="github" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"15vw", paddingTop: "5vh" }}/>
             }</a>

             <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
             {
             width>991?<UseAnimations animationKey="instagram" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
             :<UseAnimations animationKey="instagram" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
             }</a>

             <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
             {
             width>991?<UseAnimations animationKey="linkedin" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
             :<UseAnimations animationKey="linkedin" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
             }</a>
               
             <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
             {
             width>991?<UseAnimations animationKey="twitter" size={"5vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"5vw", paddingTop: "10vh" }}/>
             :<UseAnimations animationKey="twitter" size={"10vw"} style={{ color: "white", cursor: "pointer", padding:"0", margin:"0", float:"left" , paddingLeft:"10vw", paddingTop: "5vh" }}/>
             }</a>
             </span>
         </div>

         </div>
         
         <div className="home_slides">
            <div><HomeIntro/></div>
            <div><HomeProjects/></div>
            <div><HomeBlog/></div>
            <div><HomeArt/></div>
        </div>

        <SpotlightSearch onNavigate={spotlightNavigate} />

     </div>
    );
  
}