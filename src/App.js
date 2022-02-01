import React from "react";

import DesktopNavigation from "./DesktopView/Navigation/navigation.js"
import MobileNavigation from "./MobileView/Navigation/navigation.js"

import './App.css';

import ReactGA from 'react-ga';

import useWindowDimensions from "./helpers/WindowDimensions.js"

function initializeReactGA() {
  ReactGA.initialize('UA-173520154-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default function App() {

      const { width } = useWindowDimensions();

    return (
      <div>
        {initializeReactGA()}
        {width>991?
        <DesktopNavigation/>
        :<MobileNavigation/>}
      </div>          
    );
  
}