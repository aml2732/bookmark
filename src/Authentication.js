import React, { Component } from 'react';
import './styles/Authentication.css';


const authLogic = {
  isAuthenticated: false,
  authenticate(callback){
    this.isAuthenticated = true;
    callback();
  },
  signout(callback){
    this.isAuthenticated = false;
    callback();
  }
};

class Authentication extends Component {
  state = {
    authenticated: false,
    userid: "",
    username: "",
  }

  login() {
    authLogic.authenticate(() =>{
      this.setState({authenticated: authLogic.isAuthenticated});
    });
  }

  logout() {
    authLogic.signout(() => {
      this.setState({authenticated: authLogic.isAuthenticated});
    });
  }

  render() {
    return (
      <div className="authentication">
        <div className="authentication-box">
          <h3>Login:</h3>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password" />
          <button onClick={this.login}>Login</button>
        </div>
        <div className="authentication-box">
          <h3>Sign Up:</h3>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password" />
          <input type="text" placeholder="password" />
          <button>Signup</button>
        </div>
      </div>
    );
  }
}

//export default Authentication;
export {Authentication, authLogic};
