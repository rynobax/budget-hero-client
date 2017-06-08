import { connect } from 'react-redux';
import BudgetModifyDialog from './BudgetModifyDialog';
import { updateBudgetItem, deleteBudgetItem } from '../BudgetActions';

const mapStateToProps = ({budget}) => {
  return {
      categories: budget.categories.map((e) => e.name)
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