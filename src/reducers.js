import { combineReducers } from 'redux';
import auth from './components/auth/AuthReducer';
import budget from './components/app/budget/BudgetReducer';

const budgetApp = combineReducers({
  auth,
  budget
});
export default budgetApp;