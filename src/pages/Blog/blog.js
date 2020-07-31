import React, {useEffect} from "react"

import "./blog.css"

import Navbar from "../../components/navbar/navbar.js"

import Footer from "../../components/footer/footer.js"

import UseAnimations from "react-useanimations";

import { HashLink as HLink } from 'react-router-hash-link';

import sections from "./blog_sections.json"

import useWindowDimensions from "../../helpers/WindowDimensions.js"

const Blog = () => {

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const blog_sections = sections.map(function(data, id) {
    return (
        <div className="blog_post" key={id}>
        {/* <HLink to={"/blog/" + String(data.section)}>
         <img src={require("../../img/blog/" + String(data.imageUrl) + ".jpg")} className="featured_image"></img>
      </HLink> */}

      <HLink to={"/blog/" + String(data.section)}>
      <h1 className="blog_text_red">
        {data.title}
        {/* <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      /> */}
      </h1>
      </HLink>
      </div>
    );
 });

 const { width } = useWindowDimensions();

return(
  <div>

      <Navbar />
      
      <div className="main_container">
      <h1 className="main_quote">
      “ The very substance of the ambitious is merely the shadow of a dream. ”
      </h1>      

      {/* <h2 className="blog_text_big">
      ...A Featured Few
      </h2> */}

     {blog_sections}

      <button className="home_button home_button_1 blog_button">
        <h6 className="home_button_text">
          To Browse More
        {
        width>750?
        <UseAnimations
        animationKey="arrowDown"
        size={50}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", marginTop:"-3.5rem", paddingLeft:"10rem" }}
        />:
        <UseAnimations
        animationKey="arrowDown"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
        />
        }
        </h6>
      </button>

      <h5 className="blog_text_white">
        Click here to check out my instagram (@cryptic.tales).
        <a href="https://instagram.com/cryptic.tales">
       {
        width>750?
        <UseAnimations
        animationKey="instagram"
        size={30}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />:
        <UseAnimations
        animationKey="instagram"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />
        }
      </a>
      </h5>

      <h5 className="blog_text_white">
        I also write on Medium, at times.
          {
        width>750?
        <UseAnimations
        animationKey="skipForward"
        size={30}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />:
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
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