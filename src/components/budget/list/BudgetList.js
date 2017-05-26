import React from 'react';
import BudgetCategory from './BudgetCategory';

export default class BudgetList extends React.Component {
  constructor(props) {
    console.log('props: ', props);
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
    }
  }

  render() {
    return (
      <div>
        {this.props.categories.map((category, i) => {
          return (
            <BudgetCategory
            key={i}
            category={category}
            onCheck={this.onCheck.bind(null, i)}
            hidden={this.state.hidden[i] || false}
            />
          );
        })}
      </div>
    );
  }
}
