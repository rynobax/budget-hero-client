import React from 'react';
import BudgetCategory from './BudgetCategory';
import BudgetModifyDialogContainer from '../modify/BudgetModifyDialogContainer';

export default class BudgetList extends React.Component {
  constructor(props) {
    props.fetch();
    super(props);
    this.state = {
      hidden: {},
      modifyModal: {
        open: false,
        templateItem: {},
        isLastItemInLastCategory: false,
        categoryIndex: -1
      }
    };

    this.handleModifyModalOpen = (item, index, isLastItemInLastCategory) => {
      this.setState(Object.assign(
        {}, 
        this.state, 
        {
          modifyModal: {
            open: true,
            templateItem: item,
            isLastItemInLastCategory: isLastItemInLastCategory,
            categoryIndex: index
          }
        }
      ));
    };

    this.handleModifyModalClose = () => {
      this.setState(Object.assign(
        {}, 
        this.state, 
        {
          modifyModal: {
            open: false,
            templateItem: {},
          }
        }
      ));
    };

    this.onCheck = (i, _, isChecked) => {
      const newHidden = {};
      newHidden[i] = isChecked;
      const newState = {
        hidden: Object.assign({}, this.state.hidden, newHidden)
      };
      this.setState(Object.assign({}, this.state, newState));
    };
  }

  render() {
    if(this.props.categories.length > 0){
      return (
        <div>
          {this.props.categories
            .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase())
            .map((category, i) => {
              return (
                <BudgetCategory
                key={i}
                category={category}
                categoryIndex={i}
                isLastCategory={i == (this.props.categories.length-1)}
                onCheck={this.onCheck.bind(null, i)}
                hidden={this.state.hidden[i] || false}
                periodValue={this.props.periodValue}
                income={this.props.income}
                openModifyModal={this.handleModifyModalOpen}
                />
              );
          })}
        <BudgetModifyDialogContainer 
            handleClose={this.handleModifyModalClose}
            open={this.state.modifyModal.open}
            templateItem={this.state.modifyModal.templateItem}
            isLastItemInLastCategory={this.state.modifyModal.isLastItemInLastCategory}
            categoryIndex={this.state.modifyModal.categoryIndex}
        />
        </div>
      );
    } else {
      // They have not added any items
      return(
        <div>
          <br/>
          <h2>
            Click the button in the bottom right corner to add an item!
          </h2>
        </div>
      );
    }
  }
}
