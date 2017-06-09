import React from 'react';
import BudgetItem from './BudgetItem';
import Checkbox from 'material-ui/Checkbox';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { Table, TableBody } from 'material-ui/Table';
import BudgetModifyDialogContainer from '../modify/BudgetModifyDialogContainer';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class BudgetCategory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      templateItem: {},
      isLastItemInLastCategory: false
    };

    this.handleOpen = (item, isLastItemInLastCategory) => {
      this.setState({modalOpen: true, templateItem: item, isLastItemInLastCategory: isLastItemInLastCategory});
    };

    this.handleClose = () => {
      this.setState({modalOpen: false, templateItem: {}});
    };
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
      style={tableStyle}
      selectable={false}
      onCellClick={(rowNumber) => {
        this.handleOpen(this.props.category.items[rowNumber], 
          this.props.category.items.length == 1 && this.props.isLastCategory); // isLastItemInLastCategory
      }}>
        <TableBody
        showRowHover={true}>
          {this.props.category.items
            .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase())
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
      <BudgetModifyDialogContainer 
          handleClose={this.handleClose}
          categoryIndex={this.props.categoryIndex}
          open={this.state.modalOpen}
          templateItem={this.state.templateItem}
          templateCategoryLength={this.state.templateCategoryLength}
          isLastItemInLastCategory={this.state.isLastItemInLastCategory}
      />
    </div>
    );
  }
}
