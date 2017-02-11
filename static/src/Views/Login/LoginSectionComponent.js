/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './Login.css';
import {indigo200} from 'material-ui/styles/colors';
import * as firebase from 'firebase';
import {textFieldStyle} from './LoginCompletingStyles';

class LoginSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    // This binding is necessary to make `this` work in the callback
    this.handleLoginClick = this.handleLoginClick.bind(this);    
  }

  handleLoginClick() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  handleCommonChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    var underlineStyle = textFieldStyle.underline;
    var floatingTextStyle = textFieldStyle.floatingLabel;

    return (
      <div style={{textAlign: 'left'}}>
        <h4>Login</h4>
        <div>
          <TextField
            className="Login-input"
            floatingLabelText="Email" 
            underlineFocusStyle={underlineStyle} 
            floatingLabelStyle={floatingTextStyle}
            onChange={(event) => this.setState({email: event.target.value})}
            value={this.state.email}
            />
        </div>
        <div>
          <TextField
            className="Login-input"
            floatingLabelText="Password"
            type="password"
            underlineFocusStyle={underlineStyle} 
            floatingLabelStyle={floatingTextStyle}
            onChange={(event) => this.setState({password: event.target.value})}         
            value={this.state.password}          
            />
        </div>
        <div>
          <div>
            <RaisedButton
              className="Login-btn"
              label="Login"
              primary={true}
              onClick={this.handleLoginClick}
              />
          </div>
          <br />
          <br />
          <div>
            <span className="Not-registered-label">Not registered? </span>
            <FlatButton label="Sign up" />
          </div>
        </div>
      </div>
    );
  }
}

LoginSection.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default LoginSection;