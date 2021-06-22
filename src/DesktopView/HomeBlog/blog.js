import React, {useEffect} from "react"

import "./blog.css"

import UseAnimations from "react-useanimations";

import { HashLink as HLink } from 'react-router-hash-link';

import Rellax from "rellax";

import sections from "./blog_sections.json"

import blog_page_picture from "../../img/blog_page_picture.jpg"

const Blog = () => {

    // useEffect(() => {
    // window.scrollTo(0, 0)
    // }, [])

    useEffect(() => {
        
          new Rellax(".hi_animate", { // <---- Via class name
          speed: -3, 
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        })
        new Rellax(".random_animate", { // <---- Via class name
          speed: 0, 
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        })
        new Rellax(".hey_animate", { // <---- Via class name
          speed: -1, 
          center: false,
          wrapper: null,
          round: true,
          vertical: false,
          horizontal: true
        })
        new Rellax(".creative_animate", { // <---- Via class name
          speed: 1, 
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        })
        
      });

  const blog_sections = sections.map(function(data, id) {
    return (
        <div className="blog_sections_list" key={id}>

      <HLink to={"/blog/" + String(data.section)}>
      <h1 className="blog_section_name">
        {data.title}
      </h1>
      </HLink>
      </div>
    );
 });

return(
  <div>
      <div className="main_blog_container">
      <h1 className="main_blog_quote hey_animate">
      “ The very substance of the ambitious is merely the shadow of a dream. ”
      </h1>      

      {/* <h2 className="blog_text_big">
      ...A Featured Few
      </h2> */}
      <div className="main_blog_picture">
      <img alt="" src={blog_page_picture}/>
      </div>

      <button className="blog_browse">
        <h6 className="blog_browse_text">
          To Browse More
        </h6>
        <UseAnimations animationKey="arrowDown" size={30} className="blog_browse_icon"/>
      </button>
      hi

      <div className="blog_sections">
     {blog_sections}
     </div>
hii


      {/* <h5 className="blog_text_white">
        Click here to check out my instagram (@cryptic.tales).
        <a href="https://instagram.com/cryptic.tales">
   
        <UseAnimations
        animationKey="instagram"
        size={30}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0" }}
      />
      </a>
      </h5>

      <h5 className="blog_text_white">
        I also write on Medium, at times.
       
        <UseAnimations
        animationKey="skipForward"
        size={30}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", padding:"0" }}
      />
      </h5> */}

    </div>
    
    </div>

)
}

export default Blog