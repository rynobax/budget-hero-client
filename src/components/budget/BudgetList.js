import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchBudgetIfNeeded();
  }

  renderHeader(){
    const style = {
      margin: 12,
      flex: 1
    };
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
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
      );
  }
}

export default BudgetList;