import React from 'react';
import BudgetListContainer from '../../containers/budget/BudgetListContainer';
import CreateBudgetItemModalContainer from '../../containers/budget/CreateBudgetItemModalContainer';
import CreateBudgetItemButtonContainer from '../../containers/budget/CreateBudgetItemButtonContainer';


class BudgetPage extends React.Component {
  render() {
    return (
    <div>
      <h1>BudgetPage</h1>
      <CreateBudgetItemModalContainer />
      <CreateBudgetItemButtonContainer />
      <BudgetListContainer />
    </div>
  );
  }
}

export default BudgetPage;