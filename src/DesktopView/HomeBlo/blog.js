import React, {useState, useEffect} from "react";

// import Scrollable_Blog from '../../pages/Blog/scrollable_blog.js';

import "./blog.css"

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

  const [pageDown, setPageDown] = useState(false);

  useEffect(() => {
    if(pageDown===true)
    {
        window.scrollBy({top:height,left:0})
    }
  }, [pageDown, height])
  
  return (
    <div style={{width:'100vw'}}> {/*unnecessary*/}

      <div className="main_blog_container" >

        <div className="page_number">02</div>
        <div className="hi_picture"></div>

        <div onClick={()=>{setPageDown(!pageDown)}} className="intro_box">
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white">The Select Few</h3>
            <h3 className="summary_description_white">If I ever write a book, this is the stuff I’d put in it.</h3>
            <h3 className="summary_description_white">04</h3>
          </div>
        </div>

        <div className="hey_text_div">
          <h1 className="hey_text">
            I write, <br/>sometimes.
          </h1>
        </div>
        
      {/* <div className="blog_quote_div">
          <h1 className="blog_heading_quote">
          Blog
          </h1>
        </div> */}

        {/* <img className="birds" alt="" src={birds}></img> */}

      </div>

    </div>
  );
};