import React from 'react';
import BudgetItem from './BudgetItem';
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
      label={props.category.name}
      style={styles.checkbox}
      onCheck={props.onCheck}
    />
    <Table
    style={tableStyle}
    selectable={false}
    onCellClick={(rowNumber) => {
      props.openModifyModal(
        props.category.items[rowNumber],
        props.categoryIndex,
        props.category.items.length == 1 && props.isLastCategory); // isLastItemInLastCategory
    }}>
      <TableBody
      showRowHover={true}>
        {props.category.items
          .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase())
          .map((item, i) => {
            return (
              <BudgetItem 
              key={i}
              item={item}
              periodValue={props.periodValue}
              income={props.income}
              />
            );
        })}
      </TableBody>
    </Table>
  </div>
  );
}
export default BudgetCategory;
