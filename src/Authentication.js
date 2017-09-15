import React, { Component } from 'react';
import './styles/Authentication.css';

class Authentication extends Component {
  render() {
    return (
      <div className="authentication">
        <div className="authentication-box">
          <h3>Login:</h3>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password" />
          <button>Submit</button>
        </div>
        <div className="authentication-box">
          <h3>Sign Up:</h3>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password" />
          <input type="text" placeholder="password" /> 
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Authentication;
