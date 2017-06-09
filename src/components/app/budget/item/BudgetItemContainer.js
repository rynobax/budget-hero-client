import { connect } from 'react-redux';
import BudgetItem from './BudgetItem';
import { getAdjustedValue } from '../period';

const mapStateToProps = ({budget, income}, {itemId}) => {
  const item = Object.assign({}, budget.item.items.filter((item) => item.id == itemId)[0]);
  item.amount = getAdjustedValue(item.amount, item.period, income.period);
  return {
    item: item
  };
};

const mapDispatchToProps = () => {
  return {};
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetItem);