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
      body: JSON.stringify({item: item}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.added) dispatch(addBudgetItemAction(response.item));
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

const updateBudgetItemAction = (item) => {
  return {
    type: 'UPDATE_BUDGET_ITEM',
    item: item
  };
};

export function updateBudgetItem(item) {
  return (dispatch) => {
    return fetch(API_BASE + 'budget', {
      method: 'PUT', 
      body: JSON.stringify({item: item}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.updated) dispatch(updateBudgetItemAction(item));
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


const deleteBudgetItemAction = (id) => {
  return {
    type: 'DELETE_BUDGET_ITEM',
    id: id
  };
};

export function deleteBudgetItem(id) {
  return (dispatch) => {
    return fetch(API_BASE + 'budget', {
      method: 'DELETE', 
      body: JSON.stringify({id: id}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.deleted) dispatch(deleteBudgetItemAction(id));
        return response;
      })
      .catch((err) => {
        return {
          deleted: false,
          error: err
        };
      });
  };
}