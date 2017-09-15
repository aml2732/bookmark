import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header.js';
import MyBookmarks from './MyBookmarks.js';
import Authentication from './Authentication.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Authentication />
        <MyBookmarks />
      </div>
    );
  }
}

export default App;
