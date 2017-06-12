import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../../../config';
import { getPeriodByValue } from '../period';

const requestIncomeAction = () => {
  return {
    type: 'REQUEST_INCOME'
  };
};

const recieveIncomeAction = (income) => {
  return {
    type: 'RECIEVE_INCOME',
    income: income
  };
};

function handleErrors(response) {
    if (!response.ok) {
      return response.text().then((text) => {
        throw Error(text);
      }).catch(err => {
        throw Error(err);
      });
    }
    else return response;
}

const fetchIncome = () => {
  return function (dispatch) {
    dispatch(requestIncomeAction());
    return fetch(API_BASE + 'income', {credentials: 'include'})
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        dispatch(recieveIncomeAction(response.income));
      });
  };
};

function shouldFetchIncome(state) {
  const income = state.budget.income;
  if (income.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchIncomeIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchIncome(getState())) {
      return dispatch(fetchIncome());
    } else {
      return Promise.resolve();
    }
  };
}

const updateIncomeAction = (income) => {
  return {
    type: 'UPDATE_INCOME',
    income: income
  };
};

let updateTimeout = null;

export function updateIncome(amount, periodValue) {
  const income = {
    period: getPeriodByValue(periodValue).name,
    amount: amount
  };
  return function (dispatch) {
    dispatch(updateIncomeAction(income));
    if(updateTimeout != null) clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      fetch(API_BASE + 'income', {
        method: 'PUT', 
        body: JSON.stringify({income: income}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      .then(handleErrors);
    }, 3000);
  };
}
