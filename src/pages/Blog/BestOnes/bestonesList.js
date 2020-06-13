import React, {useState} from "react"

import "./bestonesList.css"

import Navbar from "../../../components/navbar/navbar.js"

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { HashLink as HLink } from 'react-router-hash-link';

import bestones from "./bestones.json"

import BestOnes_Post from './bestones.js';

const BestOnes_List = () => {

  const [id, setId] = useState(0)

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
      <hr/>     

     {posts}

    </div>
    
    </div>

)
}

const BestOnes = () => {
  return (
    <Router basename="/">
    <div>
 <Switch>
   <Route exact path="/" component={BestOnes_List} />
   <Route path="/blog/bestones" component={BestOnes_Post} />
 </Switch>
 <BestOnes_List />
</div>
 </Router>
  )
}

export default BestOnes

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/