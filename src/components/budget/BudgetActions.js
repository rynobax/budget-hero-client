import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../config';

const requestBudgetAction = () => {
  return {
    type: 'REQUEST_BUDGET'
  };
};

const recieveBudgetAction = (categories) => {
  return {
    type: 'RECIEVE_BUDGET',
    categories: categories
  };
};

function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
}

const fetchBudget = () => {
  return function (dispatch) {
    dispatch(requestBudgetAction());
    return fetch(API_BASE + 'budget')
      .then(handleErrors)
      .then(response => response.json())
      .then((budgetItems) => {
        dispatch(recieveBudgetAction(budgetItems));
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  };
};

function shouldFetchBudget(state) {
  const budget = state.budget;
  if (budget.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchBudgetIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBudget(getState())) {
      return dispatch(fetchBudget());
    } else {
      return Promise.resolve();
    }
  };
}
const addBudgetItemAction = (item) => {
  return {
    type: 'ADD_BUDGET_ITEM',
    item: item
  };
};

export function addBudgetItem(item) {
  return (dispatch) => {
    return fetch(API_BASE + 'budget', {
      method: 'POST', 
      body: JSON.stringify(item),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.added) dispatch(addBudgetItemAction(item));
        return response;
      })
      .catch((err) => {
        return {
          added: false,
          error: err
        }
      });
  }
}
