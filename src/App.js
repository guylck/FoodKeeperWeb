/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSection from './Views/Login/LoginSectionComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to FoodKeeper WEB</h2>
        </div>
        <div className="App-intro">
          <LoginSection />
        </div>
      </div>
    );
  }
}

export default App;
