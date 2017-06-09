import React from 'react';
import BudgetItemContainer from '../item/BudgetItemContainer';
import Checkbox from 'material-ui/Checkbox';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { Table, TableBody } from 'material-ui/Table';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const BudgetCategory = (props) => {
  const tableStyle = {};
  if(props.hidden){
    tableStyle['display'] = 'none';
  }
  return (
  <div>
    <Checkbox
      checkedIcon={<UpArrow />}
      uncheckedIcon={<DownArrow />}
      label={props.category}
      style={styles.checkbox}
      onCheck={props.onCheck}
    />
    <Table
    style={tableStyle}
    selectable={false}
    onCellClick={(rowNumber) => {
      props.openModifyModal(
        props.items[rowNumber],
        props.categoryIndex,
        props.items.length == 1 && props.isLastCategory); // isLastItemInLastCategory
    }}>
      <TableBody
      showRowHover={true}>
        {props.items
          .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase())
          .map((item, i) => {
            return (
              <BudgetItemContainer 
              key={i}
              itemId={item.id}
              />
            );
        })}
      </TableBody>
    </Table>
  </div>
  );
};
export default BudgetCategory;
