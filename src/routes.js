import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import BudgetPage from './components/budget/BudgetPage'
import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BudgetPage}></IndexRoute>
  </Route>
);