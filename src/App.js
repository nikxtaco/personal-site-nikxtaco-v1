import React from "react";

import Transition1 from "./pages/Home/home.js"

import './App.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-173520154-1');
ReactGA.pageview(window.location.pathname + window.location.search);


class FullPage extends React.Component {
  render() {
    return (
      <div>
        <Transition1 /> 
      </div>          
    );
  }
}

export default FullPage;