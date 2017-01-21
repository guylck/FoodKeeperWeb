/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {indigo200} from 'material-ui/styles/colors';
import * as firebase from 'firebase';
import './Login.css';

class SignUpSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			passwordRpt: "",
			firstName: "",
			lastName: ""
		}
	}

	render() {

		var loginInputsStyleUnderline = {
			borderColor: indigo200
		}

		var loginInputStyleFloatigLabel = {
			color: indigo200
		}

		return (
			<div style={{textAlign: 'left'}}>
				<h3>Sign Up</h3>
				<TextField
					className="Login-input"
					floatingLabelText="First Name" 
					underlineFocusStyle={loginInputsStyleUnderline} 
					floatingLabelStyle={loginInputStyleFloatigLabel}
					onChange={(event) => this.setState({firstName: event.target.value})}
					value={this.state.value}
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Last Name" 
					underlineFocusStyle={loginInputsStyleUnderline} 
					floatingLabelStyle={loginInputStyleFloatigLabel}
					onChange={(event) => this.setState({lastName: event.target.value})}
					value={this.state.value}
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Email" 
					underlineFocusStyle={loginInputsStyleUnderline} 
					floatingLabelStyle={loginInputStyleFloatigLabel}
					onChange={(event) => this.setState({email: event.target.value})}
					value={this.state.value}
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Password"
					type="password"
					underlineFocusStyle={loginInputsStyleUnderline} 
					floatingLabelStyle={loginInputStyleFloatigLabel}    
					onChange={(event) => this.setState({password: event.target.value})}         
					value={this.state.value}          
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Repeat password"
					type="password"
					underlineFocusStyle={loginInputsStyleUnderline} 
					floatingLabelStyle={loginInputStyleFloatigLabel}    
					onChange={(event) => this.setState({password: event.target.value})}         
					value={this.state.value}          
				/>
          </div>	
		)
	}
}

export default SignUpSection;