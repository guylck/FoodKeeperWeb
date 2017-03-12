/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'

class App extends Component {
	constructor(props) {
		super(props);

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// TODO: navigate when there is user
				browserHistory.push('/');
			} else {
				// No user is signed in.
				// Routing to '/login'
				browserHistory.push('/login');
			}
		})

		this.childContextTypes = {
			muiTheme: React.PropTypes.object
		}
	}

	getChildContext() { 
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default App;