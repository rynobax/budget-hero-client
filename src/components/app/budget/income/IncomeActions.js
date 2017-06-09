import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../../../config';

const requestIncomeAction = () => {
  return {
    type: 'REQUEST_INCOME'
  };
};

const recieveIncomeAction = (items) => {
  return {
    type: 'RECIEVE_INCOME',
    items: items
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
        dispatch(recieveIncomeAction(response.items));
      });
  };
};

function shouldFetchIncome(state) {
  const income = state.income;
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

export function updateIncome(amount, period) {
  const income = {amount: amount, period: period};
  return (dispatch) => {
    return fetch(API_BASE + 'income', {
      method: 'PUT', 
      body: JSON.stringify({income: income}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.updated) dispatch(updateIncomeAction(income));
        return response;
      });
  };
}
