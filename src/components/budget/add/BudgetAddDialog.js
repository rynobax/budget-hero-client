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
      frequencyValue: 0,
      categoryValue: 0
    };

    this.handleChangeFrequency = (_e, _i, value) => {
      this.setState(Object.assign({}, this.state, {frequencyValue: value}));
    };

    this.handleChangeCategory = (_e, _i, value) => {
      this.setState(Object.assign({}, this.state, {categoryValue: value}));
    };
    
    this.newCategoryStyle = () => {
      if(this.state.categoryValue == -1) return {};
      return {display: "none"};
    };

    this.newCategoryName = '';

    this.newCategoryOnChange = (_, val) => {
      this.newCategoryName = val;
    };

    this.newBudgetItemName = '';

    this.newBudgetItemNameChange = (_, val) => {
      this.newBudgetItemName = val;
    };

    this.newBudgetItemAmount = '';

    this.newBudgetItemAmountChange = (_, val) => {
      this.newBudgetItemAmount = val;
    };

    const getPeriod = () => {
      switch(this.state.frequencyValue){
        case 0:
          return 'ANNUAL';
        case 1:
          return 'MONTHLY';
        case 2:
          return 'WEEKLY';
      }
    }

    this.submit = () => {
      let category = '';
      const categoryIndex = this.state.categoryValue;
      if(categoryIndex != -1){
        category = this.props.categories[this.state.categoryValue];
      }else{
        category = this.newCategoryName;
      }
      const item = {
        name: this.newBudgetItemName,
        category: category,
        period: getPeriod(),
        amount: this.newBudgetItemAmount
      }
      this.props.addBudgetItem(item).then(res => {
        console.log(res);
        if(res.added){
          this.props.handleClose;
        } else {
          // TODO: Mark this message on the UI
          console.log(res.error);
        }
      })
      .catch(err => {
        console.error('Error in addBudgetItem: ', err);
      });
    };
  }
  
  render() {
    this.categories = this.props.categories.map((name, i) => <MenuItem value={i} primaryText={name} key={i} />);
    this.categories.push(<MenuItem value={-1} primaryText='New Category' key={-1} />);

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
        key={0}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submit}
        key={1}
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
            floatingLabelText="Budget Item Name"
            onChange={this.newBudgetItemNameChange}
            />
        </div>

        <div style={{display: "flex"}}>
          <div>
            <TextField
              hintText="500.00"
              floatingLabelText="Amount"
              type="number"
              onChange={this.newBudgetItemAmountChange}
              />
          </div>
          <div>
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.frequencyValue}
              onChange={this.handleChangeFrequency}
            >
              <MenuItem value={0} primaryText="Annually" />
              <MenuItem value={1} primaryText="Monthly" />
              <MenuItem value={2} primaryText="Weekly" />
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
            {this.categories}
          </SelectField>
        </div>

        <div style={this.newCategoryStyle()}>
          <TextField
            hintText="Utilities"
            floatingLabelText="New Category Name"
            onChange={this.newCategoryOnChange}
            />
        </div>
      </Dialog>
    );
  }
}
