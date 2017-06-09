export default (state = {
    period: 1
  }, action) => {
  switch (action.type){
    case 'UPDATE_UI_PERIOD':
      return Object.assign({}, state, {
        period: action.period
      });
    default:
      return state;
  }
};
