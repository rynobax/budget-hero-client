import { combineReducers } from 'redux';
import income from './income/IncomeReducer';
import item from './item/BudgetItemReducer';
import ui from './ui/UIReducer';

const budget = combineReducers({
  income,
  item,
  ui
});
export default budget;