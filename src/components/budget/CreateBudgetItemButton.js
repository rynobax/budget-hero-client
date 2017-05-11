import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class CreateBudgetItemButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <Button onClick={this.props.toggleModal}>Toggle</Button>;
  }
}

export default CreateBudgetItemButton;