import React from 'react';
import BudgetItem from './BudgetItem';
import Subheader from 'material-ui/Subheader';
import {
  Table,
  TableBody
} from 'material-ui/Table';

const BudgetCategory = ({name, items}) => {
  return (
    <div>
      <Subheader>{name}</Subheader>
      <Table>
        <TableBody
        showRowHover={true}>
          {items.map((_item) => {
            const {id, category, ...item} = _item;
            category;
            return (
              <BudgetItem 
              key={id}
              {...item}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
    );
};

export default BudgetCategory;