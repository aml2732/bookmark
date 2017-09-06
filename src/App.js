import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import MyBookmarks from './MyBookmarks.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MyBookmarks />
      </div>
    );
  }
}

export default App;
