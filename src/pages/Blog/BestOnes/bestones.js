import React from "react"

import "./bestones.css"

import Navbar from "../../../components/navbar/navbar.js"

import UseAnimations from "react-useanimations";

import { HashLink as HLink } from 'react-router-hash-link';

import bestones from "./bestones.json"

const SecondPage = () => {

  const posts = bestones.map(function(data, id) {
    return (
        <div className="blog_post">
        <HLink to="/blog/bestones">
        <h3 className="blog_text_small_list">
        {data.title}
        </h3>
        </HLink>
        <hr/>
      </div>
    );
 });

return(
  <div>

      <Navbar />
      
      <div className="main_container">
      <h1 className="main_quote">
      The Best Ones . . .
      </h1> 

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