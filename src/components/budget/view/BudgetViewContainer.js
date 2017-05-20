import { connect } from 'react-redux';
import BudgetView from './BudgetView';

const mapStateToProps = (state) => {
  return state.budget;
};


// Use connect to put them together
export default connect(mapStateToProps, {})(BudgetView);