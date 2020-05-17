import React from "react";
import "./sections.css";
import img1 from "../../../media/section1.png"
import img2 from "../../../media/section2.png"
import img3 from "../../../media/section3.png"

//import Slider from "./sections.js"

class App extends React.Component {
  render() {
    return (
      <div>
<div className="component third-component">
</div>
<div>


<div className="sections">

  <div className="heading">
  <h1>We Can Help You</h1>
  <hr/>
  </div>

  <div className="section1">
    <div className="text">
      <h2 className="section_headings">
      Track Your Clients To Identify Potential Risks
      </h2>
      <p>
      We can give you tailored content based on news related to your clients, suppliers or counterparties based on various different risk buckets ranging from financial crime, sanctions, operational risk, compliance, or even build custom models for specific use cases. You supply the keywords and the AI model will take these and identify news related to the topic. We'll score and rank the news related to your clients even if they're related by association. Look for links in the chain and historical trends over time.
      </p>
    </div>
    <img src={img1} alt="" className="img"/>
  </div>

  <div className="section2">
  <img src={img2} alt="" className="img1"/>
    <div className="text">
      <h2 className="section_headings">
      Build Custom Risk Use-Cases For You To Track Globally
      </h2>
      <p>
      Enterprises can monitor global news for specific risks or events that concern their business. Our platform helps enterprises aggregate information on any scenario intelligently using AI. For example, you want to be alerted when bank related cybercrime risk in Turkey is high or if there is an increase in oil sanctions breaches in Middle-East? Or set up specific alerts for companies and their CXOs related to money laundering. You can customise and tailor the use case to your specific needs, even down to an event level: UK elections and Brexit? Who’s in the news and how does it impact you.
      </p>
    </div>
    <img src={img2} alt="" className="img2"/>
  </div>

  <div className="section3">
    <div className="text">
      <h2 className="section_headings">
      Get Alerted On Early Warning Signals
      </h2>
      <p>
      Get the ability to analyze hundreds of business partners, clients, and companies from across the globe in 75 languages with more than 20,000 sources. Get the news before it hits the mainstream media without having to manually read and translate articles. We go beyond simple keyword searching using NLP to determine topical content based on scenario and entity mapping and normalisation to legal entity identifier (LEI) where available.
      </p>
    </div>
    <img src={img3} alt="" className="img"/>
  </div>
</div>


</div>
</div>
     ) }
}

export default App;

/*
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'

import Slider from "./slider.js"

class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef();
    this.state = true
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: this.vantaRef.true,
      touchControls: this.vantaRef.true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff3ff5,
  backgroundColor: 0x050618,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }

  render() {
    return (
      <div>
<div className="component third-component" ref={this.vantaRef}>
</div>
<div>

<Slider/>

</div>
</div>
     ) }
}

export default App;
*/