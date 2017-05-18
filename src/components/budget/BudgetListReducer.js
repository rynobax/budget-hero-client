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
    default:
      return state;
  }
};