import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';
import BudgetAddButton from '../add/BudgetAddButton';
import BudgetViewFooter from './BudgetViewFooter';
import { getAdjustedValue } from '../period';

export default class BudgetView extends React.Component {
  constructor(props){
    props.fetchItems();
    props.fetchIncome();
    super(props);

    this.state = {
      income: props.income,
      periodValue: props.periodValue
    };

    this.handlePeriodChange = (_e, _i, value) => {
      this.setState(Object.assign({}, this.state, {
        periodValue: value
      }));
      props.updatePeriod(value);
    };
    
    this.handleIncomeChange = (_e, value) => {
      this.setState(Object.assign({}, this.state, {
        income: value
      }));
      props.updateIncome(value, this.state.periodValue);
    };

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
        let adjustedAmount = 0;
        if(item.period.toLowerCase() == 'percent'){
          adjustedAmount = item.amount * (nextProps.income / 100);
        } else {
          adjustedAmount = getAdjustedValue(item.amount, item.period, nextProps.periodValue);
        }
        return sum + adjustedAmount;
      }, 0);

    this.setState(Object.assign({}, this.state, {
      income: nextProps.income,
      periodValue: nextProps.periodValue
    }));
  }

  render(){
    return(
      <div>
        <BudgetViewHeader 
          periodValue={this.state.periodValue}
          handlePeriodChange={this.handlePeriodChange}
          income={this.state.income}
          handleIncomeChange={this.handleIncomeChange}
          />
        <BudgetList
          categories={this.categories}
          />
        <BudgetViewFooter 
          margin={this.budgetMargin}
          />
        <BudgetAddButton/>
      </div>
    );
  }
}