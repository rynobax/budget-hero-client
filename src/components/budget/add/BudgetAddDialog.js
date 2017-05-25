import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

const BudgetAddDialog = (props) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={props.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={props.handleClose}
    />,
  ];
  return (
    <Dialog
      title="Add Budget Item"
      actions={actions}
      modal={false}
      open={props.open}
      onRequestClose={props.handleClose}
    >
      The actions in this window were passed in as an array of React objects.
    </Dialog>
  );
};

export default BudgetAddDialog;
