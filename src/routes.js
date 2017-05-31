import React  from 'react';
import {Route} from 'react-router';
import AuthContainer from './components/auth/AuthContainer';
import AppContainer from './components/AppContainer';

export default (
  <Route>
    <Route path="/login" component={AuthContainer}/>
    <Route path="/" component={AppContainer}/>
  </Route>
);