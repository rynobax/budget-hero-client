import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Periods, getPeriodByValue, getPeriodByName } from '../period';

export default class BudgetModifyDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frequencyValue: 1,
      categoryValue: 1,
      newCategoryNameError: '',
      newBudgetItemNameError: '',
      newBudgetItemAmountError: ''
    };

    this.clearErrors = () => {
      this.setState(Object.assign({}, this.state, 
        {
          newCategoryNameError: '', 
          newBudgetItemNameError: '',
          newBudgetItemAmountError: ''
        }
      ));
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
    this.newBudgetItemNameDefault = '';
    this.newBudgetItemNameChange = (_, val) => {
      this.newBudgetItemName = val;
    };

    this.newBudgetItemAmount = '';
    this.newBudgetItemDefaultAmount = '';
    this.newBudgetItemAmountChange = (_, val) => {
      this.newBudgetItemAmount = val;
    };
    
    this.percentStyle = () => {
      if(getPeriodByValue(this.state.frequencyValue).name.toUpperCase() == 'PERCENT') return {};
      return {display: "none"};
    };
    
    this.valueStyle = () => {
      if(getPeriodByValue(this.state.frequencyValue).name.toUpperCase() == 'PERCENT') return {display: "none"};
      return {};
    };

    this.submitUpdate = () => {
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
        period: getPeriodByValue(this.state.frequencyValue).name,
        amount: this.newBudgetItemAmount,
        id: this.props.templateItem.id
      };
      this.props.updateBudgetItem(item).then(res => {
        this.clearErrors();
        if(res.updated){
          // Close dialog
          this.props.handleClose();
        } else {
          // Set errors
          const errors = res.error.split('\n');
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
        console.error('Error in editBudgetItem: ', err);
      });
    };

    this.submitDelete = () => {
      const id = this.props.templateItem.id;
      this.props.deleteBudgetItem(id).then(res => {
        if(res.deleted){
          if(!this.props.isLastItemInLastCategory) this.props.handleClose();
        } else {
          console.log('Error in deleteBudgetItem: ', res.error);
        }
      });
    };
  }
  
  componentWillReceiveProps(nextProps){
    if(this.props.open == false && nextProps.open == true){
      const templateItem =  nextProps.templateItem;
      this.newBudgetItemName = templateItem.name;
      this.newBudgetItemNameDefault = templateItem.name;
      this.newBudgetItemAmount = templateItem.amount;
      this.newBudgetItemAmountDefault = templateItem.amount;
      this.setState(Object.assign(this.state, {
        frequencyValue: getPeriodByName(templateItem.period).value,
        categoryValue: nextProps.categoryIndex
      }));
    }
  }
  
  render() {
    this.categories = this.props.categories.sort().map((name, i) => <MenuItem value={i} primaryText={name} key={i} />);
    this.categories.push(<MenuItem value={-1} primaryText="New Category" key={-1} />);

    const handleClose = () => {
      this.clearErrors();
      this.props.handleClose();
    };

    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={handleClose}
        key={0} />,
      <FlatButton
        label="Delete Item"
        secondary={true}
        onTouchTap={this.submitDelete}
        key={1} />,
      <FlatButton
        label="Edit Item"
        primary={true}
        onTouchTap={this.submitUpdate}
        key={2} />,
    ];
    return (
      <Dialog
        title={"Edit " + this.props.templateItem.name}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={handleClose}
        autoScrollBodyContent={true}
        >
        <TextField
          hintText="Rent"
          floatingLabelText="Budget Item Name"
          onChange={this.newBudgetItemNameChange}
          errorText={this.state.newBudgetItemNameError}
          defaultValue={this.newBudgetItemNameDefault}
          />

        <SelectField
          floatingLabelText="Frequency"
          value={this.state.frequencyValue}
          onChange={this.handleChangeFrequency}
          >
          {Periods.map((e) => <MenuItem key={e.value} value={e.value} primaryText={e.name} />)}
        </SelectField>
        
        <div style={this.valueStyle()}>
          <TextField
            hintText="500.00"
            floatingLabelText="Amount"
            type="number"
            onChange={this.newBudgetItemAmountChange}
            errorText={this.state.newBudgetItemAmountError}
            defaultValue={this.newBudgetItemAmountDefault}
            />
        </div>
        <div style={this.percentStyle()}>
          <TextField
            hintText="10"
            floatingLabelText="Percentage"
            type="number"
            onChange={this.newBudgetItemAmountChange}
            errorText={this.state.newBudgetItemAmountError}
            defaultValue={this.newBudgetItemAmountDefault}
            />
        </div>
        
        <SelectField
          floatingLabelText="Category"
          value={this.state.categoryValue}
          onChange={this.handleChangeCategory}
          autoWidth={true}
        >
          {this.categories}
        </SelectField>

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
