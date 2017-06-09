import { connect } from 'react-redux';
import BudgetModifyDialog from './BudgetModifyDialog';
import { updateBudgetItem, deleteBudgetItem } from '../BudgetActions';
import { getCategoryNamesFromItems } from '../BudgetStateHelper';

const mapStateToProps = ({budget}) => {
  return {
      categories: getCategoryNamesFromItems(budget.items)
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