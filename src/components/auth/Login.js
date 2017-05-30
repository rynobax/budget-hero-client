import React from 'react';
import { browserHistory } from 'react-router';

export default class BudgetAddButton extends React.Component {
  componentDidMount() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      browserHistory.push('/');
    }
  }
  
  render() {
    return (
      <div>
          Login
      </div>
    );
  }
}