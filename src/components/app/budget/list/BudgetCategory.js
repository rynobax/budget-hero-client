import React from 'react';
import BudgetItem from './BudgetItem';
import Checkbox from 'material-ui/Checkbox';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {
  Table,
  TableBody
} from 'material-ui/Table';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class BudgetCategory extends React.Component {
  render () {
    const tableStyle = {};
    if(this.props.hidden){
      tableStyle['display'] = 'none';
    }
    return (
    <div>
      <Checkbox
        checkedIcon={<UpArrow />}
        uncheckedIcon={<DownArrow />}
        label={this.props.category.name}
        style={styles.checkbox}
        onCheck={this.props.onCheck}
      />
      <Table
      style={tableStyle}>
        <TableBody
        showRowHover={true}>
          {this.props.category.items
            .sort((a, b) => a.name > b.name)
            .map((item, i) => {
              return (
                <BudgetItem 
                key={i}
                item={item}
                periodValue={this.props.periodValue}
                income={this.props.income}
                />
              );
          })}
        </TableBody>
      </Table>
    </div>
    );
  }
}
