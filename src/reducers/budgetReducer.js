export default (state = {
    items: [],
    isFetching: false
  }, action) => {
  switch (action.type){
    case 'CREATE_BUDGET_ENTRY':
      return Object.assign({}, state, {
        items: [...state, action.budgetEntry]
      });
    case 'REQUEST_BUDGET':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECIEVE_BUDGET':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
};