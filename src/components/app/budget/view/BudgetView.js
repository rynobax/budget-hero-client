import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';
import BudgetAddButton from '../add/BudgetAddButton';

export default class BudgetView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      periodValue: 1,
      income: 0
    };

    /*
    1 - Daily
    2 - Weekly
    3 - Monthly
    4 - Yearly
    */

    this.handlePeriodChange = (_e, _i, value) => this.setState(Object.assign(this.state, {periodValue: value}));
    this.handleIncomeChange = (_e, value) => this.setState(Object.assign(this.state, {income: value}));
  }

  render(){
    return(
      <div>
        <BudgetViewHeader {...{
            periodValue: this.state.periodValue,
            handlePeriodChange: this.handlePeriodChange,
            income: this.state.income,
            handleIncomeChange: this.handleIncomeChange
          }}/>
        <BudgetList {...{
          categories: this.props.categories, 
          fetch: this.props.fetch,
          periodValue: this.state.periodValue,
          income: this.state.income
          }}/>
        <BudgetAddButton/>
      </div>
    );
  }
}