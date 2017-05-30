import { combineReducers } from 'redux';
import budget from './components/budget/BudgetReducer';
import auth from './components/auth/AuthReducer';

const budgetApp = combineReducers({
  budget,
  auth
});
export default budgetApp;