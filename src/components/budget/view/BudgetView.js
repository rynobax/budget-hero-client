import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetListContainer from '../list/BudgetListContainer';

const BudgetView = () => {
  return (
    <div>
      <BudgetViewHeader/>
      <BudgetListContainer/>
    </div>
    );
};

export default BudgetView;