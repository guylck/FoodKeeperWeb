/* jshint esversion: 6 */
/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { Router, Route, Link } from 'react-router';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLjvInkTICWVDqRKx7HcGztQD--pI0mEE",
  authDomain: "leftright-2e5de.firebaseapp.com",
  databaseURL: "https://leftright-2e5de.firebaseio.com",
  storageBucket: "leftright-2e5de.appspot.com",
  messagingSenderId: "371521623116"
};

firebase.initializeApp(config);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
