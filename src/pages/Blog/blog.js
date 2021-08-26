import React, {useEffect} from "react"

import "./blog.css"

import Navbar from "../../components/navbar/navbar.js"

import Footer from "../../components/footer/footer.js"

import UseAnimations from "react-useanimations";

import { HashLink as HLink } from 'react-router-hash-link';

import sections from "./blog_sections.json"

import useWindowDimensions from "../../helpers/WindowDimensions.js"

import ReactGA from 'react-ga';

import blog_page_picture from "../../img/blog_page_picture.jpg"

function initializeReactGA() {
  ReactGA.initialize('UA-173520154-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Blog = () => {

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const blog_sections = sections.map(function(data, id) {
    return (
        <div className="blog_post" key={id}>

      <HLink to={"/blog/" + String(data.section)}>
      <h1 className="blog_text_white">
        {data.title}
      </h1>
      </HLink>
      </div>
    );
 });

 const { width } = useWindowDimensions();

return(
  <div>

    {initializeReactGA()}

      {/* <Navbar /> */}
      
      <div className="main_container">
      <h1 className="main_quote">
      “ The very substance of the ambitious is merely the shadow of a dream. ”
      </h1>      

      {/* <h2 className="blog_text_big">
      ...A Featuwhite Few
      </h2> */}

      {width>1440?
      <img alt="" src={blog_page_picture} style={{position:'absolute', paddingLeft:"0", maxWidth:"30vw"}}></img>
      :<img alt="" src={blog_page_picture} style={{pointerEvents: "none", opacity:"0.25", position:'absolute', paddingLeft:"0px", width:"82vw"}}></img>}
     
     {blog_sections}

      <button className="home_button home_button_1 blog_button">
        <h6 className="home_button_text">
          To Browse More
        {
        width>1440?
        <UseAnimations
        animationKey="arrowDown"
        size={50}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0", paddingTop:"-3.5rem", paddingLeft:"10rem" }}
        />:
        <UseAnimations
        animationKey="arrowDown"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0", paddingLeft:"60px" }}
        />
        }
        </h6>
      </button>

      <h5 className="blog_text_white">
        Click here to check out my instagram (@cryptic.tales).
        <a href="https://instagram.com/cryptic.tales">
       {
        width>1440?
        <UseAnimations
        animationKey="instagram"
        size={30}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0" }}
      />:
        <UseAnimations
        animationKey="instagram"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0" }}
      />
        }
      </a>
      </h5>

      <h5 className="blog_text_white">
        I also write on Medium, at times.
          {
        width>1440?
        <UseAnimations
        animationKey="skipForward"
        size={30}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0" }}
      />:
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0" }}
      />
        }
      </h5>

    </div>

    <Footer />
    
    </div>

)
}

export default Blog

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/