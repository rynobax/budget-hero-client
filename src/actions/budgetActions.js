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
  console.log('data: ', data);
  return {
    type: 'RECIEVE_BUDGET',
    items: data
  }
}

const apiUrl = 'http://localhost:9000/api/';

export const fetchBudget = (subreddit) => {
  function handleError(err){
    console.log('Error: ', err);
  }

  return function (dispatch) {
    dispatch(requestBudget())

    return fetch(apiUrl + 'budget')
      .then(response => response.json())
      .then(({success, data}) => {
        if(success){
          dispatch(recieveBudget(data));
        }else{
          handleError(data);
        };
      })
      .catch(handleError);
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
