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
    return (
    <div>
      <Checkbox
        checkedIcon={<UpArrow />}
        uncheckedIcon={<DownArrow />}
        label={this.props.name}
        style={styles.checkbox}
      />
      <Table>
        <TableBody
        showRowHover={true}>
          {this.props.items.map((item, i) => {
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