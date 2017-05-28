import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class BudgetItem extends React.Component {
  render() {
    const { item, ...rowProps } = this.props;
    // Use these or don't send from server
    ///////
    return (
      <TableRow
      hoverable={true}
      {...rowProps}>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>{'$' + item.amount}</TableRowColumn>
      </TableRow>
    );
  }
}
