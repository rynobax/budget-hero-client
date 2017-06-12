import { connect } from 'react-redux';
import BudgetView from './BudgetView';
import { fetchBudgetIfNeeded } from '../item/BudgetItemActions';
import { updateUIPeriod } from '../ui/UIActions';
import { updateIncome } from '../income/IncomeActions';

const mapStateToProps = ({budget}) => {
  return {
    items: budget.item.items,
    income: budget.income.amount,
    periodValue: budget.ui.period
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchBudgetIfNeeded());
    },
    updatePeriod: (period) => {
      return dispatch(updateUIPeriod(period));
    },
    updateIncome: (income, period) => {
      return dispatch(updateIncome(income, period));
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetView);