"use strict";

// Standard Node Libraries
// N/A
// Third-Party Libraries
// N/A
// Custom Libraries
import React, { Component } from 'react';
// Resources
import banner from '../images/calculator_banner_dope.jpg';
// Styling
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={banner} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
