import { connect } from 'react-redux';
import BudgetCategory from './BudgetCategory';

const mapStateToProps = ({budget}, {category}) => {
  return {
    items: budget.item.items
      .filter((item) => item.category == category)
      
  };
};

const mapDispatchToProps = () => {
  return {};
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategory);