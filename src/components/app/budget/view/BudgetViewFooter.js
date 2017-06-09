import React from 'react';
const divStyle = {
  padding: 12,
  flex: 1,
  height: 60
};

const BudgetListFooter = (props) => {
  return (
    <div style={{
      display: 'flex'
      }}>
      <div style={divStyle}>
        <h2>Margin:</h2>
      </div>
      <div style={divStyle}>
        <h2>${props.margin.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default BudgetListFooter;