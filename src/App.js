import React from "react";

import Transition1 from "./pages/Home/home.js"

import './App.css';

import ReactGA from 'react-ga';

import useWindowDimensions from "./helpers/WindowDimensions.js"

function initializeReactGA() {
  ReactGA.initialize('UA-173520154-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default () => {

      const { width } = useWindowDimensions();

    return (
      <div>
        {initializeReactGA()}
        {width>750?<h1>Please use your phone, the site looks trash on such a big screen. For now.</h1>
        :<Transition1 /> }
      </div>          
    );
  
}

