import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchBudgetIfNeeded();
  }
  
  renderBudgetEntry({name, amount, _id}) {
    return (
      <TableRow key={_id}>
        <TableRowColumn> {name} </TableRowColumn>
        <TableRowColumn> {amount} </TableRowColumn>
      </TableRow>
    );
  }
  
  render() {
    return (
      <div>
        <Table>
          <TableBody displayRowCheckbox={false}>
            {this.props.items.map(this.renderBudgetEntry)} 
          </TableBody>
        </Table>
      </div>
      );
  }
}
/*
BudgetList.propTypes = {
    budget: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired
        })).isRequired,
      isFetching: PropTypes.boolean
  })
};*/

export default BudgetList;