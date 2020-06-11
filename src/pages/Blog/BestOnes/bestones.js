import React from "react"

import "./bestones.css"

import Navbar from "../../../components/navbar/navbar.js"

import UseAnimations from "react-useanimations";

import first_featured from "../../../img/featured2.jpg"

const blog_posts = [
  {
    id: 1,
    title: "So... what?",
    desc: "I have no idea",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JLypco-p9w6bxGNHiFaz1AHaFj%26pid%3DApi&f=1",
    body: "yo",
  },
  {
    id: 2,
    title: "hey2",
    desc: "ya",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Mymf469Kp128whMVkHRQ5AHaFj%26pid%3DApi&f=1",
    body: "yo",
  },
]

const SecondPage = () => {

  const posts = blog_posts.map(function(data, id) {
    return (
        <div className="blog_post">
        <a href="/blog/1">
        <img src={data.imageUrl} className="featured_image"></img>

        <h3 className="filler_text_blog">
        {data.title}
        </h3>

        <h5 className="blog_text_small">
        {data.desc}
        </h5>
      </a>
      </div>
    );
 });

return(
  <div>

      <Navbar />
      
      <div className="main_container">
      <h1 className="main_quote">
      “ The very substance of the ambitious is merely the shadow of a dream. ”
      </h1>      

      <h2 className="blog_text_big">
      ...A Featured Few
      </h2>


     {posts}

      <div className="blog_post">
      <a href="/blog/1">
        <img src={first_featured} className="featured_image"></img>

        <h3 className="filler_text_blog">
          My Favorite City
        </h3>

        <h5 className="blog_text_small">
        If I were to fangirl over my own words, these would undoubtedly be at the top of my list
        </h5>
      </a>
      </div>

      <button className="home_button home_button_1 blog_button">
        <h6 classname="home_button_text">
          To Browse More
        <UseAnimations
        animationKey="arrowDown"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0", paddingLeft:"60px" }}
      />
        </h6>
      </button>

      <h5 className="blog_text_red">
        Check out my instagram page.
        <UseAnimations
        animationKey="instagram"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />
      </h5>

      <h5 className="blog_text_red">
        I also write on Medium, at times.
        <UseAnimations
        animationKey="skipForward"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />
      </h5>

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