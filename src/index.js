/* jshint esversion: 6 */
/* eslint-disable */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginSection from './Views/Login/LoginSectionComponent';
import './index.css';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory } from 'react-router';

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

class Test extends Component{

  render() {
    return <h1>TESSSTTTT</h1>;
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={LoginSection} />  
    </Route>
  </Router>,
  document.getElementById('root')
);
