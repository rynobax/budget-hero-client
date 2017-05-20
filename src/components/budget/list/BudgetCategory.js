import React from 'react';
import BudgetItem from './BudgetItem';
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {
  Table,
  TableBody
} from 'material-ui/Table';

const BudgetCategory = ({name, items}) => {
  return (
    <ListItem>
      <Subheader>{name}</Subheader>
      <Table>
        <TableBody>
          {items.map((item, i) => {
            return (
              <BudgetItem 
              key={i}
              {...item}
              />
            );
          })}
        </TableBody>
      </Table>
    </ListItem>
    );
};

export default BudgetCategory;