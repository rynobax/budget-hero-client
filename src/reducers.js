import { combineReducers } from 'redux';
import budgetList from './components/budget/budgetListReducer';

const budgetApp = combineReducers({
  budgetList
});
export default budgetApp;