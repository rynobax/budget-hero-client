import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const divStyle = {
  padding: 12,
  flex: 1,
  height: 60
};

const BudgetViewHeader = (props) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: "space-between",
      flexWrap: 'wrap'
      }}>
      <div style={divStyle}>
        <TextField
          hintText="20000"
          floatingLabelText="Income"
          floatingLabelFixed={true}
          inputStyle={{color: "green"}}
          onChange={props.handleIncomeChange}
          value={props.income}
          type="number"
        />
      </div>
      <div style={divStyle}>
        <SelectField
          floatingLabelText="Frequency"
          value={props.periodValue}
          onChange={props.handlePeriodChange}
          style={{width: "100%"}}
        >
          <MenuItem value={1} primaryText="Daily" />
          <MenuItem value={2} primaryText="Weekly" />
          <MenuItem value={3} primaryText="Monthly" />
          <MenuItem value={4} primaryText="Yearly" />
        </SelectField>
      </div>
    </div>
  );
};

export default BudgetViewHeader;