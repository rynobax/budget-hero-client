import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';
import BudgetAddButton from '../add/BudgetAddButton';
import BudgetViewFooter from './BudgetViewFooter';

export default class BudgetView extends React.Component {
  constructor(props){
    super(props);

    this.handlePeriodChange = (_e, _i, value) => props.updatePeriod(value);
    this.handleIncomeChange = (_e, value) => this.setState(Object.assign(this.state, {income: value}));

    this.categories = [];
    this.budgetMargin = 0;
  }
  
  componentWillReceiveProps(nextProps){    
    this.categories = nextProps.items.reduce((categories, {category}) => {
      if(!categories.some((c) => c == category)) categories.push(category);
      return categories;
    }, []);
    
    this.budgetMargin =
      nextProps.income -
      nextProps.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
  }

  render(){
    return(
      <div>
        <BudgetViewHeader 
          periodValue={this.props.periodValue}
          handlePeriodChange={this.handlePeriodChange}
          income={this.props.income}
          handleIncomeChange={this.handleIncomeChange}
          />
        <BudgetList
          categories={this.categories}
          fetch={this.props.fetch}
          />
        <BudgetViewFooter 
          margin={this.budgetMargin}
          />
        <BudgetAddButton/>
      </div>
    );
  }
}