import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Blog from './blog.js';
import BestOnesList from './BestOnes/bestonesList.js';

  class App extends Component {
    render() {
      return (
        <Router basename="/">
           <div>
        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/bestonesList" component={BestOnesList} />
          <Route path="/poetryList" component={Blog} />
          <Route path="/tolList" component={Blog} />
          <Route path="/poetry" component={Blog} />
          <Route path="/thinkingoutloud" component={Blog} />
        </Switch>
      </div>
        </Router>
      )
    }
  }
  
  export default App