import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {getPeriodByName, getPeriodByValue} from '../period';

const getAdjustedValue = (viewPeriodValue, income, {period, amount}) => {
  if(period.toLowerCase() == 'percent') {
    return income * (amount / 100);
  } else {
    const viewPeriodDays = getPeriodByValue(viewPeriodValue).days;
    const itemDays = getPeriodByName(period).days;
    return amount * (viewPeriodDays / itemDays);
  }
};

export default class BudgetItem extends React.Component {
  render() {
    const { periodValue, income, item, ...rowProps } = this.props;
    // Use these or don't send from server
    ///////
    return (
      <TableRow
      hoverable={true}
      {...rowProps}>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>
          {'$' + getAdjustedValue(periodValue, income, item).toFixed(2)}
        </TableRowColumn>
      </TableRow>
    );
  }
}
