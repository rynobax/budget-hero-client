import { getPeriodByName } from '../period';

export default (state = {
    amount: 0,
    periodValue: 4,
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
        periodValue: getPeriodByName(action.income.period).value
      });
    case 'UPDATE_INCOME':
      return Object.assign({}, state, {
        amount: action.income.amount,
        periodValue: getPeriodByName(action.income.period).value
      });
    default:
      return state;
  }
};