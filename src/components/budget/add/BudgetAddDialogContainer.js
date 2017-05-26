import { connect } from 'react-redux';
import BudgetAddDialog from './BudgetAddDialog';
import {fetchBudgetIfNeeded} from '../BudgetActions';

const mapStateToProps = (state) => {
  return {
      categories: state.budget.categories.map((e) => e.name)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchBudgetIfNeeded());
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetAddDialog);