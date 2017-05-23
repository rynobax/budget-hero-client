import { connect } from 'react-redux';
import BudgetList from './BudgetList';
import {fetchBudgetIfNeeded} from '../BudgetActions';

const mapStateToProps = (state) => {
  return state.budget;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchBudgetIfNeeded());
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);