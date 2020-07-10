import React from "react"

import "./featured.css"

import Navbar from "../../../components/navbar/navbar.js"

import { HashLink as HLink } from 'react-router-hash-link';

import featured from "./featured.json"

const SecondPage = () => {

  const posts = featured.map(function(data, id) {
    return (
        <div className="blog_post">
        <HLink to={"/blog/" + String(data.section)}>
         {/* <img src={require("../../img/blog/" + String(data.imageUrl) + ".jpg")} className="featured_image"></img> */}

        <h1 className="title">
        {data.title}
        </h1>

        <hr className = "hr_title"/>

        <h5 className="blog_text_small">
        {data.year}
        </h5>
      </HLink>

      <h6 className="filler_text_unlinked">
        {data.moreText}
      </h6>

      <HLink to={"/blog/" + String(data.section)}>
      <h5 className="read_more">
        {/* {data.moreLinkText} */}
        Read More
      </h5>
      </HLink>
      </div>
    );
 });

return(
  <div>

      <Navbar />
      
      <div className="main_container">
      <h1 className="main_heading">
      Featured
      </h1>      

      {/* <h2 className="blog_text_big">
      ...A Featured Few
      </h2> */}


     {posts}

    </div>
    
    </div>

)
}

export default SecondPage

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/