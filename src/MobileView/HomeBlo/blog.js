import React, {useState, useEffect} from "react";

// import Scrollable_Blog from '../../pages/Blog/scrollable_blog.js';

// import "./blog.css"

// import UseAnimations from "react-useanimations";

// import Rellax from "rellax";

import useWindowDimensions from "../../helpers/WindowDimensions.js"

import birds from "../../media/tree.png" //birds.png
// import feathers from "../../img/feathers_blue.jpg"

export default () => {

  // useEffect(() => {
  //   if(width>750)
  //   {
  //     new Rellax(".hi_animate", { // <---- Via class name
  //     speed: -3, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   new Rellax(".random_animate", { // <---- Via class name
  //     speed: 0, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   new Rellax(".hey_animate", { // <---- Via class name
  //     speed: -1, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   new Rellax(".creative_animate", { // <---- Via class name
  //     speed: 1, 
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   })
  //   }
  // });

  const { height } = useWindowDimensions();

  const [about, setAbout] = useState(false);

  useEffect(() => {
    if(about===true)
    {
        window.scrollBy({top:height,left:0})
    }
  }, [about, height])
  
  return (
    <div style={{width:'100vw'}}>

      <div className="main_blog_container" >
      {/* <div className="side_background_container_blog"></div> */}

        <div onClick={()=>{setAbout(!about)}} className="blog_box3">
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white">Exhibit A</h3>
            <h3 className="summary_description_white">If I ever write a book, this stuff is going on it, period.</h3>
            <h3 className="summary_description_white">04</h3>
          </div>
        </div>

        <div onClick={()=>{setAbout(!about)}} className="blog_box2">
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white">Exhibit B - Instagram Page</h3>
            <h3 className="summary_description_white">Poetry that I’ve been writing for upward of 3 years now.</h3>
            <h3 className="summary_description_white">05</h3>
          </div>
        </div>

        <div onClick={()=>{setAbout(!about)}} className="blog_box1">
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white">Exhibit C - Medium Page</h3>
            <h3 className="summary_description_white">Articles on current affairs. Thoughts and the like.</h3>
            <h3 className="summary_description_white">06</h3>
          </div>
        </div>

        
      <div className="blog_quote_div">
          <h1 className="blog_heading_quote">
          Blog
          </h1>
        </div>

        <img className="birds" alt="" src={birds}></img>

      </div>

    </div>
  );
};