import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header.js';
import MyBookmarks from './MyBookmarks.js';
import Authentication from './Authentication.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component{
  render(){return(
    <div>Placeholder for Home</div>
  );}
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/dashboard" component={MyBookmarks} />
        </div>
      </Router>
    );
  }
}

export default App;
