import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Header extends Component {
  render() {
    return(
      <div className="header">
        Header goes here
        <div className="authentication-navigation">
          <Link to="/authentication" >Sign in</Link>
        </div>
        <div className="classic-navigation">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>Nav-Placeholder</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
