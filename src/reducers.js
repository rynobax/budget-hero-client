import { combineReducers } from 'redux';
import budget from './components/budget/BudgetReducer';

const budgetApp = combineReducers({
  budget
});
export default budgetApp;