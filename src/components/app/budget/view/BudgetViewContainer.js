import { connect } from 'react-redux';
import BudgetView from './BudgetView';
import {fetchBudgetIfNeeded} from '../BudgetActions';

const mapStateToProps = ({budget}) => {
  function getCategoryIndex(categories, category){
    return categories.reduce((prev, cur, i) => {
      if(cur.name == category) return i;
      else return prev;
    }, -1);
  }
  return {
    isFetching: budget.isFetching,
    categories: budget.items.reduce((categories, {category, ...item}) => {
      const index = getCategoryIndex(categories, category);
      if(index == -1) {
        categories.push({
          name: category,
          items: [item]
        });
      } else {
        categories[index].items.push(item);
      }
      return categories;
    }, [])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchBudgetIfNeeded());
    }
  };
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BudgetView);