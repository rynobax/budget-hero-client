import React from 'react';
import BudgetCategory from './BudgetCategory';
import {List} from 'material-ui/List';

class BudgetList extends React.Component {
  constructor(props) {
    props.fetch();
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.categories.map((category, i) => {
          return (
            <BudgetCategory
            key={i}
            {...category}
            />
          );
        })}
      </List>
    );
  }
}

export default BudgetList;