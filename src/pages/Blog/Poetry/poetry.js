import React, {useState, useEffect} from "react"
import Navbar from "../../../components/navbar/navbar.js"
import Footer from "../../../components/footer/footer.js"

import UseAnimations from "react-useanimations";
import bestones from "./poetry.json"

import useWindowDimensions from "../../../helpers/WindowDimensions.js"

import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-173520154-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Poetry = () => {

  const { width } = useWindowDimensions();

  const [post_id, setPost_id] = useState(0)
  const [show_post, setShow_post] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [post_id])

  const posts = bestones.map(function(data, id) {
    return (
      <div key={id} className="blog_post" onClick={() => {setPost_id(data.id) && setShow_post(1)}}>
        
        <h3 className="post_title">{data.title}</h3>

        <hr className = "post_hr"/>

        <h5 className="post_year">{data.year}</h5>

        <h6 className="post_desc">{data.desc}</h6>

        <h5 className="post_read_more">Read More</h5>

      </div>
    );
  });

  const post = bestones.map((data, id) => {
    if(data.id === post_id)
      {
        return(
          <div key={id}>

            <br/>
            <h3 className="individual_post_title">{data.title}</h3> 
            
            <h3 className="post_date">{data.date}</h3>

            <hr className = "individual_post_hr"/>
            
            {/* <img alt="" src={require("../../../img/blog/" + String(data.imageUrl) + ".jpg")} className="post_image"></img> */}
            
            <h3 className="post_body">
                {data.body.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br/></span>
                })}
            </h3>
          </div>
        )
      }
    return null;
  });

  return (
    <div>

      {initializeReactGA()}
 
    {!post_id && !show_post &&
    <div>

      <Navbar />
          
      <div className="main_container">

        <h3 className="section_name">Poetry</h3> 

        {posts}
        
      </div>
        
    </div>
    }

    {post_id && !show_post ?
    <div>

      <Navbar />

      <div className="main_container">
        
        <h5 className="blog_text_red back" onClick={() => {setPost_id(0)}}>Back To List</h5>

        {post}

        <h5 className="back_to_list" onClick={() => {setPost_id(0)}}>
          Back To List
          {
      width>750?
      <UseAnimations
      animationKey="skipBack"
      size={40}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />:
      <UseAnimations
      animationKey="skipBack"
      size={20}
      style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />
      }
        </h5>

      </div>
    
    </div>
    : null }

    <Footer />

    </div>
  )
}

export default Poetry

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/