import { connect } from 'react-redux';
import BudgetAddDialog from './BudgetAddDialog';
import { addBudgetItem } from '../item/BudgetItemActions';
import { getCategoryNamesFromItems } from '../BudgetStateHelper';

const mapStateToProps = ({budget}) => {
  return {
      categories: getCategoryNamesFromItems(budget.item.items)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBudgetItem: (item) => {
      return dispatch(addBudgetItem(item));
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetAddDialog);