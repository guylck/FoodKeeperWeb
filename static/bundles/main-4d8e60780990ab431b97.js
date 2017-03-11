/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* jshint esversion: 6 */
	/* eslint-disable */

	import React, { Component } from 'react';
	import ReactDOM from 'react-dom';
	import AppWelcome from './AppWelcome';
	import LoginSection from './Views/Login/LoginSectionComponent';
	import App from './App';
	import './index.css';
	import * as firebase from 'firebase';
	import injectTapEventPlugin from 'react-tap-event-plugin';
	import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

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

	class Test extends Component {

	  render() {
	    return React.createElement(
	      'h1',
	      null,
	      'TESSSTTTT'
	    );
	  }
	}

	ReactDOM.render(React.createElement(
	  Router,
	  { history: browserHistory },
	  React.createElement(
	    Route,
	    { component: App },
	    React.createElement(Route, { path: '/', component: Test }),
	    React.createElement(
	      Route,
	      { component: AppWelcome },
	      React.createElement(Route, { path: '/login', component: LoginSection })
	    )
	  )
	), document.getElementById('root'));

/***/ }
/******/ ]);