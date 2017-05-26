import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';

const BudgetView = (props) => {
  return (
    <div>
      <BudgetViewHeader />
      <BudgetList {...{categories: props.categories, fetch: props.fetch}}/>
    </div>
    );
};

export default BudgetView;