export default (state = {
    categories: [],
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
      const newCategories = state.categories.map(category => {
        return Object.assign({}, category, {
          items: category.items.map((item) => {
            return item;
          })
        });
      });
      const itemCategoryIndex = newCategories.reduce((prev, existingCategory, i) => {
        if(existingCategory.name == category) return i;
        else return prev;
      }, -1);
      if(newCategories[itemCategoryIndex] == undefined){
        newCategories.push({
          name: category,
          items: [item]
        });
      }else{
        newCategories[itemCategoryIndex].items.push(item);
      }
      return Object.assign({}, state, {
        categories: newCategories
      });
    }
    default:
      return state;
  }
};