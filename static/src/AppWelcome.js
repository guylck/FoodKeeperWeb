/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
class AppWelcome extends Component {

  constructor (props) {
    super(props);
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

