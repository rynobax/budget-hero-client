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

const fetchBudget = () => {
  function handleErrors(response) {
      if (!response.ok) throw Error(response.statusText);
      return response;
  }

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
  const data = new FormData();
  data.append('json', JSON.stringify(item))
  return (dispatch) => {
    return fetch(API_BASE + 'budget', {method: 'POST', body: data})
      .then((response) => {
        if(response.statusText == 200){
          // It was added
          dispatch(addBudgetItemAction(item));
          return {
            added: true
          };
        } else {
          // It was not added
          
        }
      })
      .catch((err) => {
        return {
          added: false,
          error: err
        }
      });
  }
}
