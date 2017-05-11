import { createBudgetEntry, fetchBudgetIfNeeded } from '../../actions/budgetActions';
import { connect } from 'react-redux';
import BudgetList from '../../components/budget/BudgetList';

const mapStateToProps = (state) => {
  return state.budget;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateBudgetEntry: (budgetEntry) => {
      dispatch(createBudgetEntry(budgetEntry));
    },
    fetchBudgetIfNeeded: () => {
      dispatch(fetchBudgetIfNeeded());
    }
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);