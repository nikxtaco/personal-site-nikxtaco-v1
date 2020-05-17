import React from "react";
import "./features.css";
import img1 from "../../../media/visualisation.svg";
import img2 from "../../../media/risk.svg";
import img3 from "../../../media/visualisation.svg";

//import Slider from "./features.js"

class App extends React.Component {
  render() {
    return (
      <div>
<div>


<div className="features">
  <h1>Our Unique Features</h1>
  <hr/>

  <div className="feature1">
  <img src={img1} alt="" className="img"/>
    <div className="text">
      <h2>
      Data Visualization
      </h2>
      <p>
      Data visualization is the act of taking information and placing it into a visual context, such as a map or graph. Data visualizations make big and small data easier for the human brain to understand.
      </p>
    </div>
  </div>

  <div className="feature2">
  <img src={img2} alt="" className="img"/>
    <div className="text">
      <h2>
      Media Risk Assesment
      </h2>
      <p>
      Risk analysis is the process of identifying and analyzing potential issues that could negatively impact key business initiatives or critical projects in order to help organizations avoid or mitigate those risks.
      </p>
    </div>
  </div>

  <div className="feature3">
    <img src={img3} alt="" className="img"/>
    <div className="text">
      <h2>
      Entity Detection
      </h2>
      <p>
      Named Entity Recognition is a process where an algorithm takes a string of text as input and identifies relevant nouns such as people, places, and organizations that are mentioned in that string.
      </p>
    </div>
  </div>
</div>


</div>
</div>
     ) }
}

export default App;