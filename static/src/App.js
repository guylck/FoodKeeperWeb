/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
	constructor(props) {
		super(props);

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// TODO: navigate when there is user
				// browserHistory.push('/');
				
				browserHistory.push('/login');
				
			} else {
				// No user is signed in.
				// Routing to '/login'
				browserHistory.push('/login');
			}
		})
	}

	render() {
		return (
			<div className="App">
				<MuiThemeProvider>
					{this.props.children}
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;