import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class BudgetItem extends React.Component {
  render() {
    const { name, amount, period, ...rowProps } = this.props;
    period;
    return (
      <TableRow
      hoverable={true}
      {...rowProps}>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{amount}</TableRowColumn>
      </TableRow>
    );
  }
}


export default BudgetItem;