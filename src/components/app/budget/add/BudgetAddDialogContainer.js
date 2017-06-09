import { connect } from 'react-redux';
import BudgetAddDialog from './BudgetAddDialog';
import { addBudgetItem } from '../BudgetActions';
import { getCategoryNamesFromItems } from '../BudgetStateHelper';

const mapStateToProps = ({budget}) => {
  return {
      categories: getCategoryNamesFromItems(budget.items)
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