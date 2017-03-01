
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo200} from 'material-ui/styles/colors';
import * as firebase from 'firebase';
import './Login.css';
import {textFieldStyle} from './LoginCompletingStyles';


class SignUpSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			tempPassword: "",
			rptPassword: ""
		}

		// This binding is necessary to make `this` work in the callback
    	this.signUp = this.signUp.bind(this);   
	}

	signUp() {

		var state = this.state;
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
			function successCallback(user) {

				// Create my kind of user object
				var userToAdd =  {
					id: user.uid,
					email: user.email,
					providerData: user.providerData,
					firstName: state.firstName,
					lastName: state.lastName,
					providerId: "email"
				};

				if (user.photoURL) {
					userToAdd.photoURL = user.photoURL
				}

				// Adding user data to db
				fetch('/api/users/', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						user: userToAdd
					})
				});
			}, 
			function errorCallback(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
		});
	}

	validatePassword(event) {

		if (event.target.value && event.target.value === this.state.tempPassword) {
			this.setState({password : event.target.value})
			console.log("password good");
		} else {
			this.setState({rptPassword : event.target.value});
		}
	}

	render() {

		var underlineStyle = textFieldStyle.underline;
    	var floatingTextStyle = textFieldStyle.floatingLabel;

		return (
			<div style={{textAlign: 'left'}}>
				<h4>Sign Up</h4>
				<TextField
					className="Login-input"
					floatingLabelText="First Name" 
					underlineFocusStyle={underlineStyle} 
            		floatingLabelStyle={floatingTextStyle}
					onChange={(event) => this.setState({firstName: event.target.value})}
					value={this.state.firstName}
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Last Name" 
					underlineFocusStyle={underlineStyle} 
            		floatingLabelStyle={floatingTextStyle}
					onChange={(event) => this.setState({lastName: event.target.value})}
					value={this.state.lastName}
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Email" 
					underlineFocusStyle={underlineStyle} 
            		floatingLabelStyle={floatingTextStyle}
					onChange={(event) => this.setState({email: event.target.value})}
					value={this.state.email}
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Password"
					type="password"
					underlineFocusStyle={underlineStyle} 
            		floatingLabelStyle={floatingTextStyle}
					onChange={(event) => this.setState({tempPassword: event.target.value})}         
					value={this.state.tempPassword}          
				/>
				<TextField
					className="Login-input"
					floatingLabelText="Repeat password"
					type="password"
					underlineFocusStyle={underlineStyle} 
            		floatingLabelStyle={floatingTextStyle}
					onChange={this.validatePassword.bind(this)}       
					value={this.state.rptPassword}          
				/>
				<RaisedButton 
					label="Sign Up" 
					fullWidth={true}
					primary={true}
					onClick={this.signUp} 
				/>
          </div>	
		)
	}
}

export default SignUpSection;