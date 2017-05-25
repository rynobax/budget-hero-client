import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import BudgetAddDialog from './BudgetAddDialog';

export default class BudgetAddButton extends React.Component {
  constructor() {
    super();
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
    console.log(this.props);
    return (
      <div style={this.props.divStyle}>
        <RaisedButton 
          icon={<FontIcon className="material-icons">add_circle</FontIcon>}
          onTouchTap={this.handleOpen} 
          style={this.props.buttonStyle}/>
        <BudgetAddDialog {...{
          handleOpen: this.handleOpen,
          handleClose: this.handleClose,
          open: this.state.open
          }}/>
      </div>
    );
  }
}