import { connect } from 'react-redux';
import CreateBudgetItemButton from '../../components/budget/CreateBudgetItemButton';
import { toggleCreateBudgetEntryModal } from '../../actions/budgetModalActions';

const mapStateToProps = (state) => {
  return state.budgetModal.createBudget;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => {
      dispatch(toggleCreateBudgetEntryModal());
    }
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(CreateBudgetItemButton);