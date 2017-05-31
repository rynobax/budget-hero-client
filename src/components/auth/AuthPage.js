import React from 'react';
import { browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import Register from './Register';

export default class AuthPage extends React.Component {
  componentDidMount() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      browserHistory.push('/');
    }
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="Login" >
            <Login {...{login: this.props.login}}/>
          </Tab>
          <Tab label="Register" >
            <Register {...{register: this.props.register}}/>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}