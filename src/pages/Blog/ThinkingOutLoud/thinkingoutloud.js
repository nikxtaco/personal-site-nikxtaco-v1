import React, {useState, useEffect} from "react"
import "./thinkingoutloud.css"
import Navbar from "../../../components/navbar/navbar.js"
import UseAnimations from "react-useanimations";
import thinkingoutloud from "./thinkingoutloud.json"

const ThinkingOutLoud = () => {

  const [post_id, setPost_id] = useState(0)
  const [show_post, setShow_post] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [post_id])

  const posts = thinkingoutloud.map(function(data, id) {
    return (
      <div className="blog_post" onClick={() => {setPost_id(data.id) && setShow_post(1)}}>
        
        <h3 className="post_title">{data.title}</h3>

        <hr className = "post_hr"/>

        <h5 className="post_year">{data.year}</h5>

        <h6 className="post_desc">{data.desc}</h6>

        <h5 className="post_read_more">Read More</h5>

      </div>
    );
  });

  const post = thinkingoutloud.map((data, id) => {
    if(data.id === post_id)
      {
        return(
          <div>

            <br/>
            <h3 className="main_title">{data.title}</h3> 
            
            <h3 className="post_date">{data.date}</h3>
            
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
 
    {!post_id && !show_post &&
    <div>

      <Navbar />
          
      <div className="main_container">

        <h3 className="section_name">Thinking Out Loud</h3> 

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

        <h5 className="blog_text_red" onClick={() => {setPost_id(0)}}>
          Back To List
          <UseAnimations
              animationKey="skipBack"
              size={20}
              style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
          />
        </h5>

      </div>
    
    </div>
    : null }

    </div>
  )
}

export default ThinkingOutLoud

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/