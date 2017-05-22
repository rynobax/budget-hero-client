import React from 'react';
import BudgetCategory from './BudgetCategory';

class BudgetList extends React.Component {
  constructor(props) {
    props.fetch();
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.categories.map((category, i) => {
          return (
            <BudgetCategory
            key={i}
            {...category}
            />
          );
        })}
      </div>
    );
  }
}

export default BudgetList;