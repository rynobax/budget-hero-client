import React from 'react';
import PropTypes from 'prop-types';

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchBudgetIfNeeded();
  }
  
  renderBudgetEntry({name, amount, key}) {
    return <li key={key}>{name}—{amount}</li>;
  }
  
  render() {
    return (
      <div>
        <ul> {this.props.items.map(this.renderBudgetEntry)} </ul>
      </div>
      );
  }
}
/*
BudgetList.propTypes = {
    budget: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired
        })).isRequired,
      isFetching: PropTypes.boolean
  })
};*/

export default BudgetList;