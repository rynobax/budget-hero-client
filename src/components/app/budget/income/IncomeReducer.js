export default (state = {
    amount: 0,
    period: 'YEARLY',
    isFetching: false
  }, action) => {
  switch (action.type){
    case 'REQUEST_INCOME':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECIEVE_INCOME':
      return Object.assign({}, state, {
        isFetching: false,
        amount: action.income.amount,
        period: action.income.period
      });
    case 'UPDATE_INCOME': {
      return Object.assign({}, state, {
        amount: action.income.amount,
        period: action.income.period
      });
    }
    default:
      return state;
  }
};