export default (state = {
    items: [],
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
        items: action.items
      });
    case 'ADD_BUDGET_ITEM': {
      return Object.assign({}, state, {
        items: state.items.concat([action.item])
      });
    }
    case 'UPDATE_BUDGET_ITEM': {
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          if(item.id == action.item.id) return action.item;
          else return item;
        })
      });
    }
    case 'DELETE_BUDGET_ITEM': {
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          if(item.id == action.id) return false;
          return true;
        })
      });
    }
    default:
      return state;
  }
};