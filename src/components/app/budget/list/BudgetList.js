import React from 'react';
import BudgetCategory from './BudgetCategory';

export default class BudgetList extends React.Component {
  constructor(props) {
    props.fetch();
    super(props);
    this.state = {
      hidden: {}
    };
    this.onCheck = (i, _, isChecked) => {
      const newHidden = {};
      newHidden[i] = isChecked;
      const newState = {
        hidden: Object.assign({}, this.state.hidden, newHidden)
      };
      this.setState(Object.assign({}, this.state, newState));
    };
  }

  render() {
    if(this.props.categories.length > 0){
      return (
        <div>
          {this.props.categories
            .sort((a, b) => a.name > b.name)
            .map((category, i) => {
              return (
                <BudgetCategory
                key={i}
                category={category}
                onCheck={this.onCheck.bind(null, i)}
                hidden={this.state.hidden[i] || false}
                periodValue={this.props.periodValue}
                income={this.props.income}
                />
              );
          })}
        </div>
      );
    } else {
      // They have not added any items
      return(
        <div>
          <br/>
          <h2>
            Click the button in the bottom right corner to add an item!
          </h2>
        </div>
      )
    }
  }
}
