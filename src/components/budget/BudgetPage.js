import React from 'react';
import BudgetListContainer from '../../containers/budget/BudgetListContainer';


class BudgetPage extends React.Component {
  render() {
    return (
    <div>
      <h1>BudgetPage</h1>
      <BudgetListContainer />
    </div>
  );
  }
}

export default BudgetPage;