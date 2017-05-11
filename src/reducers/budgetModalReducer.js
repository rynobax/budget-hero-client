export default (state = {
    createBudget: {
      showModal: false
    }
  }, action) => {
  switch (action.type){
    case 'TOGGLE_CREATE_BUDGET_ENTRY_MODAL':
      return Object.assign({}, state, {
        createBudget: {
          showModal: !state.createBudget.showModal
        }
      });
    default:
      return state;
  }
};