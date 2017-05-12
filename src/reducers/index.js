import { combineReducers } from 'redux';
import budget from './budgetReducer';

const budgetApp = combineReducers({
  budget
});
export default budgetApp;