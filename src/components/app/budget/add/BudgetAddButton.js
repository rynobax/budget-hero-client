import React from 'react';
import BudgetAddDialogContainer from './BudgetAddDialogContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class BudgetAddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpen = () => {
      this.setState({open: true});
    };

    this.handleClose = () => {
      this.setState({open: false});
    };
  }

  render() {
    return (
      <FloatingActionButton
        mini={true}
        style={{
            position: "fixed",
            right: "15px",
            bottom: "15px"
          }}
        onTouchTap={this.handleOpen}
        >
        <ContentAdd />
        <BudgetAddDialogContainer {...{
          handleClose: this.handleClose,
          open: this.state.open
          }}/>
      </FloatingActionButton>
    );
  }
}