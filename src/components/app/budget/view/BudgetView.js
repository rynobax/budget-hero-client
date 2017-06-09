import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';
import BudgetAddButton from '../add/BudgetAddButton';
import BudgetViewFooter from './BudgetViewFooter';

export default class BudgetView extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      periodValue: 1,
      income: 0
    };

    this.handlePeriodChange = (_e, _i, value) => this.setState(Object.assign(this.state, {periodValue: value}));
    this.handleIncomeChange = (_e, value) => this.setState(Object.assign(this.state, {income: value}));

    this.categories = [];
    this.budgetMargin = 0;
  }
  
  componentWillReceiveProps(nextProps){    
    this.categories = nextProps.items.reduce((categories, {category, ...item}) => {
      const index = categories.reduce((prev, cur, i) => {
        if(cur.name == category) return i;
        else return prev;
      }, -1);
      if(index == -1) {
        categories.push({
          name: category,
          items: [item]
        });
      } else {
        categories[index].items.push(item);
      }
      return categories;
    }, []);
    
    this.budgetMargin =
      this.state.income -
      nextProps.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
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
          fetch={this.props.fetch}
          periodValue={this.state.periodValue}
          income={this.state.income}
          />
        <BudgetViewFooter 
          margin={this.budgetMargin}
          />
        <BudgetAddButton/>
      </div>
    );
  }
}