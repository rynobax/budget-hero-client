import React from 'react';
const divStyle = {
  padding: 12,
  flex: 1,
  height: 60
};

const BudgetListFooter = (props) => {
  const textColor = props.margin >= 0 ? 'green' : 'red';
  return (
    <div style={{
      display: 'flex'
      }}>
      <div style={divStyle}>
        <h2>Margin:</h2>
      </div>
      <div style={divStyle}>
        <h2 style={{color: textColor}}>${props.margin.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default BudgetListFooter;