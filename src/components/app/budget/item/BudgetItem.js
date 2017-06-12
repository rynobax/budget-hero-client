import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const BudgetItem = (props) => {
  const { itemId, item, ...rowProps } = props;
  itemId;
  return (
    <TableRow
    hoverable={true}
    {...rowProps}>
      <TableRowColumn>{item.name}</TableRowColumn>
      <TableRowColumn>
        {'$' + item.amount.toFixed(2)}
      </TableRowColumn>
    </TableRow>
  );
};

export default BudgetItem;
