import React, {useState} from "react"
import "./bestones.css"
import Navbar from "../../../components/navbar/navbar.js"
import UseAnimations from "react-useanimations";
import bestones from "./bestones.json"

const BestOnes = () => {

  const [post_id, setPost_id] = useState(0)
  const [show_post, setShow_post] = useState(0)
  const posts = bestones.map(function(data, id) {
    return (
        <div className="blog_post" onClick={() => {setPost_id(data.id) && setShow_post(1)}}>
        <h3 className="title_list">
        {data.title}
        </h3>
      </div>
    );
 });

 const post = bestones.map((data, id) => {
  if(data.id === post_id)
    {
      return(
        <div>
          <h1 className="blog_text_small_list">
          {data.title}
          </h1> 
          <img alt="" src={require("../../../img/blog/" + String(data.imageUrl) + ".jpg")} className="featured_image"></img>
          <h3>
          {/* {JSON.stringify(data.body).replace("|","/n")} */}
          {data.body.split('\n').map((item, key) => {
  return <span key={key}>{item}<br/></span>
})}
          </h3>
        </div>
      )
    }
  return 0;
});

  return (
    <div>
 
 {!post_id && !show_post &&
 <div>

      <Navbar />
      
      <div className="main_container">
      <h1 className="main_heading">
      The Best Ones
      </h1> 

     {posts}

    </div>
    
    </div>
}

{post_id && !show_post ?
   <div>

   <Navbar />

   
   <div className="main_container">
     
   <h5 className="blog_text_red" onClick={() => {setPost_id(0)}}>
        Back To List
        <UseAnimations
        animationKey="skipBack"
        size={20}
        style={{ color: "white", cursor: "pointer", float:"right", padding:"0", margin:"0" }}
      />
      </h5>
      

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

export default BestOnes

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/