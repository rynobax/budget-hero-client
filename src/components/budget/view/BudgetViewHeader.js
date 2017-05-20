import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 12,
  flex: 1
};

const BudgetListHeader = () => {
  return (
    <div style={{display: "flex"}}>
      <RaisedButton
        icon={<FontIcon className="material-icons">create</FontIcon>}
        style={style}
      />
      <RaisedButton
        icon={<FontIcon className="material-icons">add_circle</FontIcon>}
        style={style}
      />
    </div>
  );
};

export default BudgetListHeader;