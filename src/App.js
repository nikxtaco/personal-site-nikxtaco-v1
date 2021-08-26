import React from "react";

// import Transition1 from "./pages/Home/home.js"
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
        {console.log(width)}
        {width>1440?
        <DesktopNavigation/>
        :<MobileNavigation/>}
      </div>          
    );
  
}




// // To hide desktop view...

// import React from "react";

// import Transition1 from "./pages/Home/home.js"

// import './App.css';

// import ReactGA from 'react-ga';

// import useWindowDimensions from "./helpers/WindowDimensions.js"

// function initializeReactGA() {
//   ReactGA.initialize('UA-173520154-1');
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }

// export default () => {

//       const { width } = useWindowDimensions();

//     return (
//       <div>
//         {initializeReactGA()}
//         {width>1440?<h1 style={{textAlign:"center", fontSize:50}}>Please use a smaller screen. Desktop view will be out soon.</h1>
//         :<Transition1 /> }
//       </div>          
//     );
  
// }

