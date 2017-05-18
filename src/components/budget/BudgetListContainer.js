import { fetchBudgetIfNeeded } from './budgetListActions';
import { connect } from 'react-redux';
import BudgetList from './BudgetList';

const mapStateToProps = (state) => {
  return state.budgetList;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBudgetIfNeeded: () => {
      dispatch(fetchBudgetIfNeeded());
    }
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);