import { connect } from 'react-redux';
import BudgetModifyDialog from './BudgetModifyDialog';
import { updateBudgetItem, deleteBudgetItem } from '../item/BudgetItemActions';
import { getCategoryNamesFromItems } from '../BudgetStateHelper';

const mapStateToProps = ({budget}) => {
  return {
      categories: getCategoryNamesFromItems(budget.item.items)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBudgetItem: (item) => {
      return dispatch(updateBudgetItem(item));
    },
    deleteBudgetItem: (id) => {
      return dispatch(deleteBudgetItem(id));
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetModifyDialog);