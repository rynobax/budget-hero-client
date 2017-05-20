import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const BudgetItem = ({name, amount}) => {
  return (
    <TableRow>
      <TableRowColumn>{name}</TableRowColumn>
      <TableRowColumn>{amount}</TableRowColumn>
    </TableRow>
    );
};

export default BudgetItem;