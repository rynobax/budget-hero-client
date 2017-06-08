import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Login from './Login';
import Register from './Register';

const paperStyle = {
  padding: 20,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  maxWidth: "100%"
};
const paperDepth = 2;

const AuthPage = (props) => {
  return (
    <Tabs>
      <Tab label="Login" >
        <Login {...{login: props.login, paperStyle: paperStyle, paperDepth: paperDepth}}/>
      </Tab>
      <Tab label="Register" >
        <Register {...{register: props.register, login: props.login, paperStyle: paperStyle, paperDepth: paperDepth}}/>
      </Tab>
    </Tabs>
  );
};

export default AuthPage;