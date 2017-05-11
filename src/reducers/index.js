import { combineReducers } from 'redux';
import budget from './budgetReducer';
import budgetModal from './budgetModalReducer';

const budgetApp = combineReducers({
  budget,
  budgetModal
});
export default budgetApp;