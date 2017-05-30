import { connect } from 'react-redux';
import BudgetView from './BudgetView';
import {fetchBudgetIfNeeded} from '../BudgetActions';

const mapStateToProps = ({budget}) => {
  return budget;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchBudgetIfNeeded());
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetView);