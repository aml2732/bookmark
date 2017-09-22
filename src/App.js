import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header.js';
import MyBookmarks from './MyBookmarks.js';
import {Authentication, authLogic} from './Authentication.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


class Home extends Component{
  render(){return(
    <div>Placeholder for Home</div>
  );}
}

function PrivateRouteComponent({component: Component, ...rest}) {
  if (authLogic.isAuthenticated){
    console.log("is Authenticated");
    return <Route {...rest} render={(props) => (<Component {...props} />)} />
  }
  else{
    console.log("is not authenticated");
    return (<Route {...rest} render={(props) => {
      <Redirect to={{
        pathname: '/authentication',
        state: {from: props.location}
      }} />
    }}/>);
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/authentication" component={Authentication} />
          <PrivateRouteComponent path="/dashboard" component={MyBookmarks}/>
        </div>
      </Router>
    );
  }
}

export default App;
