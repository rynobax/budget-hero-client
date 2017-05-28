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
      categoryValue: 0,
      newCategoryNameError: '',
      newBudgetItemNameError: '',
      newBudgetItemAmountError: ''
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
        case 3:
          return 'PERCENT';
      }
    };
    
    this.percentStyle = () => {
      if(getPeriod() == 'PERCENT') return {};
      return {display: "none"};
    };
    
    this.valueStyle = () => {
      if(getPeriod() == 'PERCENT') return {display: "none"};
      return {};
    };

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
        amount: this.newBudgetItemAmount,
        type: 'VALUE'
      };
      this.props.addBudgetItem(item).then(res => {
        if(res.added){
          this.props.handleClose();
        } else {
          const errors = res.error.split('\n');
          this.setState(Object.assign({}, this.state, {newCategoryNameError: ''}));
          this.setState(Object.assign({}, this.state, {newBudgetItemNameError: ''}));
          this.setState(Object.assign({}, this.state, {newBudgetItemAmountError: ''}));
          errors.forEach((err) => {
            function ucFirst(string){
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            if(err.includes('category')){
              this.setState(Object.assign({}, this.state, {newCategoryNameError: ucFirst(err)}));
            }
            if(err.includes('name')){
              this.setState(Object.assign({}, this.state, {newBudgetItemNameError: ucFirst(err)}));
            }
            if(err.includes('amount')){
              this.setState(Object.assign({}, this.state, {newBudgetItemAmountError: ucFirst(err)}));
            }
          });
        }
      })
      .catch(err => {
        console.error('Error in addBudgetItem: ', err);
      });
    };
  }
  
  render() {
    this.categories = this.props.categories.sort().map((name, i) => <MenuItem value={i} primaryText={name} key={i} />);
    this.categories.push(<MenuItem value={-1} primaryText="New Category" key={-1} />);

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
            errorText={this.state.newBudgetItemNameError}
            />
        </div>

        <div style={{display: "flex"}}>
          <div>
            <div style={this.valueStyle()}>
              $
              <TextField
                hintText="500.00"
                floatingLabelText="Amount"
                type="number"
                onChange={this.newBudgetItemAmountChange}
                errorText={this.state.newBudgetItemAmountError}
                />
            </div>
            <div style={this.percentStyle()}>
              %
              <TextField
                hintText="500.00"
                floatingLabelText="Amount"
                type="number"
                onChange={this.newBudgetItemAmountChange}
                errorText={this.state.newBudgetItemAmountError}
                />
            </div>
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
              <MenuItem value={3} primaryText="Percentage" />
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
            errorText={this.state.newCategoryNameError}
            />
        </div>
      </Dialog>
    );
  }
}
