function categoriesCopy(categories){
  return categories.map(category => {
    return Object.assign({}, category, {
      items: category.items.map((item) => {
        return item;
      })
    });
  });
}

function getCategoryIndexByCategory(categories, category){
  return categories.reduce((prev, existingCategory, i) => {
    if(existingCategory.name == category) return i;
    else return prev;
  }, -1);
}

function getCategoryIndexById(categories, id){
  return categories.reduce((prev, existingCategory, i) => {
    if(existingCategory.items.some(e => e.id == id) == true) return i;
    else return prev;
  }, -1);
}

function addBudgetItem(categories, action){
  const {category, ...item} = action.item;
  const newCategories = categoriesCopy(categories);
  const categoryIndex = getCategoryIndexByCategory(newCategories, category);
  if(newCategories[categoryIndex] == undefined){
    newCategories.push({
      name: category,
      items: [item]
    });
  }else{
    newCategories[categoryIndex].items.push(item);
  }
  return newCategories;
}

function deleteBudgetItemByCategory(categories, action){
  const {category, id} = action.item;
  const newCategories = categoriesCopy(categories);
  const categoryIndex = getCategoryIndexByCategory(newCategories, category);
  newCategories[categoryIndex].items = newCategories[categoryIndex].items.filter((e) => e.id !== id);
  if(newCategories[categoryIndex].items.length < 1) newCategories.splice(categoryIndex, 1);
  return newCategories;
}

function deleteBudgetItemById(categories, action){
  const {id} = action.item;
  const newCategories = categoriesCopy(categories);
  const categoryIndex = getCategoryIndexById(newCategories, id);
  newCategories[categoryIndex].items = newCategories[categoryIndex].items.filter((e) => e.id !== id);
  if(newCategories[categoryIndex].items.length < 1) newCategories.splice(categoryIndex, 1);
  return newCategories;
}

function editBudgetItem(state, action){
  const midState = deleteBudgetItemById(state, action);
  return addBudgetItem(midState, action);
}

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
      return Object.assign({}, state, {
        categories: addBudgetItem(state.categories, action)
      });
    }
    case 'EDIT_BUDGET_ITEM': {
      return Object.assign({}, state, {
        categories: editBudgetItem(state.categories, action)
      });
    }
    case 'DELETE_BUDGET_ITEM': {
      return Object.assign({}, state, {
        categories: deleteBudgetItemByCategory(state.categories, action)
      });
    }
    default:
      return state;
  }
};