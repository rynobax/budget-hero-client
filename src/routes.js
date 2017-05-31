import React  from 'react';
import {Route} from 'react-router';
import App from './components/App';
import AuthContainer from './components/auth/AuthContainer';
import EnsureLoggedInContainer from './components/auth/EnsureLoggedInContainer';

export default (
  <Route>
    <Route path="/login" component={AuthContainer}/>
    <Route component={EnsureLoggedInContainer}>
      <Route path="/" component={App}/>
    </Route>
  </Route>
);