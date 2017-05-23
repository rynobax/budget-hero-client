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

class BudgetCategory extends React.Component {
  constructor() {
    super();
  }

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
          {this.props.category.items.map((item, i) => {
            return (
              <BudgetItem 
              key={i}
              {...item}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
    );
  }
}

export default BudgetCategory;