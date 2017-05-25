import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class BudgetAddDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      frequencyValue: 1,
      categoryValue: 1
    };

    this.handleChangeFrequency = (event, index, value) => {
      this.setState(Object.assign({}, this.state, {frequencyValue: value}));
    };

    this.handleChangeCategory = (event, index, value) => {
      this.setState(Object.assign({}, this.state, {categoryValue: value}));
    };
    
    this.newCategoryStyle = () => {
      if(this.state.categoryValue == 0) return {};
      return {display: "none"};
    };
  }
  
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose}
      />,
    ];
    return (
      <Dialog
        title="Add Budget Item"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
        autoScrollBodyContent={true}
      >
        <div>
          <TextField
            hintText="Rent"
            floatingLabelText="Budget Item Name"/>
        </div>

        <div style={{display: "flex"}}>
          <div>
            <TextField
              hintText="500.00"
              floatingLabelText="Amount"
              type="number"/>
          </div>
          <div>
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.frequencyValue}
              onChange={this.handleChangeFrequency}
            >
              <MenuItem value={1} primaryText="Annually" />
              <MenuItem value={2} primaryText="Monthly" />
              <MenuItem value={3} primaryText="Weekly" />
            </SelectField>
          </div>
        </div>
        
        <div>
          <SelectField
            floatingLabelText="Category"
            value={this.state.categoryValue}
            onChange={this.handleChangeCategory}
            autoWidth={true}
          >
            <MenuItem value={1} primaryText="Category 1" />
            <MenuItem value={2} primaryText="Category 2" />
            <MenuItem value={0} primaryText="New" />
          </SelectField>
        </div>

        <div style={this.newCategoryStyle()}>
          <TextField
            hintText="Utilities"
            floatingLabelText="New Category Name"/>
        </div>
      </Dialog>
    );
  }
}
