import React from 'react';
import BudgetViewHeader from './BudgetViewHeader';
import BudgetList from '../list/BudgetList';
import BudgetAddButton from '../add/BudgetAddButton';

export default class BudgetView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      periodValue: 1,
    };
    this.handleChange = (_e, _i, value) => this.setState({periodValue: value});
  }

  render(){
    return(
      <div>
        <BudgetViewHeader {...{
            periodValue: this.state.periodValue,
            handleChange: this.handleChange
          }}/>
        <BudgetList {...{categories: this.props.categories, fetch: this.props.fetch}}/>
        <BudgetAddButton/>
      </div>
    );
  }
}