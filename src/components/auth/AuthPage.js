import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import Register from './Register';

const AuthPage = (props) => {
  return (
    <MuiThemeProvider>
      <Tabs>
        <Tab label="Login" >
          <Login {...{login: props.login}}/>
        </Tab>
        <Tab label="Register" >
          <Register {...{register: props.register}}/>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
  );
};

export default AuthPage;