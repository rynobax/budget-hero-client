import { combineReducers } from 'redux';
import auth from './components/auth/AuthReducer';
import budget from './components/app/budget/BudgetReducer';
import income from './components/app/budget/income/IncomeReducer';

const budgetApp = combineReducers({
  auth,
  budget,
  income
});
export default budgetApp;