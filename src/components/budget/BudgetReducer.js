export default (state = {
    categories: {},
    isFetching: false
  }, action) => {
  switch (action.type){
    case 'REQUEST_BUDGET':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECIEVE_BUDGET':
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.categories
      });
    case 'ADD_BUDGET_ITEM': {
      const {category, ...item} = action.item;
      const newCategories = state.categories;
      if(newCategories[category] == undefined) newCategories[category] = [];
      newCategories[category].push(item);
      return Object.assign({}, state, {
        categories: newCategories
      });
    }
    default:
      return state;
  }
};