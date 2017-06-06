import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../../config';

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
    if (!response.ok) {
      return response.text().then((text) => {
        throw Error(text);
      }).catch(err => {
        throw Error(err);
      });
    }
    else return response;
}

const fetchBudget = () => {
  return function (dispatch) {
    dispatch(requestBudgetAction());
    return fetch(API_BASE + 'budget', {credentials: 'include'})
      .then(handleErrors)
      .then(response => response.json())
      .then((budgetItems) => {
        dispatch(recieveBudgetAction(budgetItems));
      })
      .catch((err) => {
        console.error('Error in fetchBudget: ', err);
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
      },
      credentials: 'include'
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
        };
      });
  };
}

const editBudgetItemAction = (item) => {
  return {
    type: 'EDIT_BUDGET_ITEM',
    item: item
  };
};

export function editBudgetItem(item) {
  return (dispatch) => {
    return fetch(API_BASE + 'budget', {
      method: 'PUT', 
      body: JSON.stringify(item),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.updated) dispatch(editBudgetItemAction(item));
        return response;
      })
      .catch((err) => {
        return {
          updated: false,
          error: err
        };
      });
  };
}
