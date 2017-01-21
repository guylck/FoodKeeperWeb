/* jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import * as firebase from 'firebase';
import LoginSection from './LoginSectionComponent';
import SignUpSection from './SignUpSectionComponent';
import { Col, Row, Grid } from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class LoginView extends Component {
	render() {

		const localMuiTheme = getMuiTheme({
			// tabs: {
			// 	backgroundColor: 'white',
			// 	textColor: '#3F51B5',
			// 	selectedTextColor: '#3F51B5' 
			// },	
			inkBar: {
				backgroundColor: '#3F51B5'
			}
		})

		return (
			<div style={{alignText:'center'}}>
				<Grid>
					<Row>
						<Col md={4} mdOffset={4}>
							<MuiThemeProvider muiTheme={localMuiTheme}>
								<Tabs>
									<Tab label="LOG IN">
										<LoginSection />
									</Tab>
									<Tab label="SIGN UP">
										<SignUpSection />
									</Tab>
								</Tabs>
							</MuiThemeProvider>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default LoginView;