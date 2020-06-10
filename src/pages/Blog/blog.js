import React from "react"

import "./blog.css"

import Navbar from "../../components/navbar/navbar.js"

import UseAnimations from "react-useanimations";

import first_featured from "../../img/claus.jpg"

const SecondPage = () => (
  <div>

      <Navbar />
      
      <div className="main_container">
      <h1 className="main_quote">
        " Whether you have a dancing itch or an actual itch, the screens will make it look darn good. "
      </h1>      

      <h2 className="blog_text_big">
      ...The Featured Few
      </h2>

      <img src={first_featured} className="featured_image"></img>

      <h3 className="filler_text_blog">
        So... what?
      </h3>

      <h5 className="blog_text_small">
      Dogstudio is a multidisciplinary
      creative studio at the intersection
      of art, design and technology.
      </h5>

      <button className="home_button home_button_1">
        <h6 classname="home_button_text">
          Check out my projects
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
      </button>

      <h4 className="home_text_red">
        it's time to shine.
      </h4>

      <h1 className="main_text">
        Now coming to my creative side!
      </h1>

      <h5 className="home_text_small">
      ...and on that note, here's a list of things I enjoy.
      </h5>

      <h3 className="filler_text">
        Poetry and prose. <br/>
        Does it get any better than this?
      </h3>

      <button className="home_button home_button_1">
        <h6 classname="home_button_text">
        Read away
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
      </button>

      <h5 className="home_text_small">
      Yes, I know there's 
      only one item on it so it's not exactly a list but bear with me. 
      I hope to add more of them someday.
      </h5>

    </div>
    
    </div>

)

export default SecondPage

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/