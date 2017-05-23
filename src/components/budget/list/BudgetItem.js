import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class BudgetItem extends React.Component {
  render() {
    const { name, amount, period, _id, ...rowProps } = this.props;
    // Use these or don't send from server
    period;
    _id;
    ///////
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