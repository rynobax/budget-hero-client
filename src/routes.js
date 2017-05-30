import React  from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Login from './components/login/Login';
import EnsureLoggedInContainer from './components/auth/EnsureLoggedInContainer';

export default (
  <Route>
    <Route path="/login" component={Login}/>
    <Route component={EnsureLoggedInContainer}>
      <Route path="/" component={App}/>
    </Route>
  </Route>
);