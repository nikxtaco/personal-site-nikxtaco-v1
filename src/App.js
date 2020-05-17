import React from "react";

import Transition1 from "./transitions/transition1/transition1.js"
import Transition2 from "./transitions/transition2/transition2.js"

import './App.css';

class FullPage extends React.Component {
  render() {
    return (
      <body>
        <Transition1 />           
        <Transition2 />
      </body>
    );
  }
}

export default FullPage;

// import React from "react";
// import { Pager } from "react-bootstrap";

// import ReactPageScroller from "react-page-scroller";

// import Transition1 from "./transitions/transition1/transition1.js"
// import Transition2 from "./transitions/transition2/transition2.js"

// import './App.css';

// // import FirstComponent from "./pages/FirstComponent";
// // import SecondComponent from "./pages/SecondComponent";
// // import Sections from "./pages/Sections";
// // import Vertical from "./pages/VerticalTimeline.js"
// // import Footer from "./Footer.js"

// class FullPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentPage: null };
//   }


//   handlePageChange = number => {
//     this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
//   };

//   getPagesNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= 9; i++) {
//       pageNumbers.push(
//         <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
//           {i}
//         </Pager.Item>,
//       );
//     }

//     return [...pageNumbers];
//   };

 

//   render() {
//     const pagesNumbers = this.getPagesNumbers();

//     return (
//       <body>
//       <React.Fragment>
//         <ReactPageScroller
//           pageOnChange={this.handlePageChange}
//           customPageNumber={this.state.currentPage}
//         >
        
//         <Transition1 />           
//         <Transition2 />

//         </ReactPageScroller>
        
//          {/* <Pager className="pagination-additional-class" bsSize="large">
//            {pagesNumbers}
//      </Pager> */}
//       </React.Fragment>
//       </body>
//     );
//   }
// }

// export default FullPage;