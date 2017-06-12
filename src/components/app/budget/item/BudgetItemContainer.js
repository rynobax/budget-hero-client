import { connect } from 'react-redux';
import BudgetItem from './BudgetItem';
import { getAdjustedValue } from '../period';

const mapStateToProps = ({budget}, {itemId}) => {
  const item = Object.assign({}, budget.item.items.filter((item) => item.id == itemId)[0]);
  if(item.period.toLowerCase() == 'percent'){
    item.amount = item.amount * (budget.income.amount / 100);
  } else {
    item.amount = getAdjustedValue(item.amount, item.period, budget.ui.periodValue);
  }
  return {
    item: item
  };
};

const mapDispatchToProps = () => {
  return {};
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetItem);