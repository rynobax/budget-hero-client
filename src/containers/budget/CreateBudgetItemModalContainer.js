import { connect } from 'react-redux';
import CreateBudgetItemModal from '../../components/budget/CreateBudgetItemModal';
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateBudgetItemModal);