export default (state = {
    periodValue: 4
  }, action) => {
  switch (action.type){
    case 'UPDATE_UI_PERIOD':
      return Object.assign({}, state, {
        periodValue: action.periodValue
      });
    default:
      return state;
  }
};
