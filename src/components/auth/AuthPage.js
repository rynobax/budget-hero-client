import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import Register from './Register';


const paperStyle = {
  padding: 20,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const paperDepth = 2;

const AuthPage = (props) => {
  return (
    <MuiThemeProvider>
      <Tabs>
        <Tab label="Login" >
          <Login {...{login: props.login, paperStyle: paperStyle, paperDepth: paperDepth}}/>
        </Tab>
        <Tab label="Register" >
          <Register {...{register: props.register, login: props.login, paperStyle: paperStyle, paperDepth: paperDepth}}/>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
  );
};

export default AuthPage;