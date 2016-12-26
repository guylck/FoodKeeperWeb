/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import './App.css';
class AppWelcome extends Component {

  constructor (props) {
    super(props);
  }

	render() {
		return (
			<div>
				<div className="App-header">
					<h1>Title</h1>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default AppWelcome;

