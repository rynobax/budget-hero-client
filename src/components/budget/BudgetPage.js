import React from 'react';
import BudgetListContainer from '../../containers/budget/BudgetListContainer';


class BudgetPage extends React.Component {
  render() {
    return (
    <div>
      <button>Add Something</button>
      <BudgetListContainer />
    </div>
  );
  }
}

export default BudgetPage;