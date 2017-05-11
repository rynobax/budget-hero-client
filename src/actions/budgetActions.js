import fetch from 'isomorphic-fetch';

export const createBudgetEntry = (budgetEntry) => {
  return {
    type: 'CREATE_BUDGET_ENTRY',
    budgetEntry: budgetEntry
  };  
};

const requestBudget = () => {
  return {
    type: 'REQUEST_BUDGET'
  }
}

const recieveBudget = (data) => {
  return {
    type: 'RECIEVE_BUDGET',
    items: data
  }
}

const apiUrl = 'http://localhost:9000/api/';

export const fetchBudget = (subreddit) => {
  function handleErrors(response) {
      if (!response.ok) throw Error(response.statusText);
      return response;
  }

  return function (dispatch) {
    dispatch(requestBudget());

    return fetch(apiUrl + 'budget')
      .then(handleErrors)
      .then(response => response.json())
      .then((items) => {
        dispatch(recieveBudget(items));
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }
}

function shouldFetchBudget(state) {
  const budget = state.budget;
  if (!budget) {
    return true;
  } else if (budget.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchBudgetIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBudget(getState())) {
      return dispatch(fetchBudget())
    } else {
      return Promise.resolve()
    }
  }
}
