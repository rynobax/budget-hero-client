import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';

const BudgetView = (props) => {
  return (
    <div>
      <BudgetViewHeader/>
      <BudgetList {...props}/>
    </div>
    );
};

export default BudgetView;