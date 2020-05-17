import React, { Component } from "react";
import Slider from "react-slick";

import Section1 from "./section1.js"
import Section2 from "./section2.js"
import Section3 from "./section3.js"

import "./sections.css";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      adaptiveHeight: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slider",
    };
    return (
      <div className="slider">
        <Slider ref={c => (this.slider = c)} {...settings} >
          <div key={1} style={{'height':'50vh'}}>
            <div><Section1/></div>
          </div>
          <div key={2}>
          <Section2/>
          </div>
          <div key={3}>
          <Section3/>
          </div>
        </Slider>
        <div>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}