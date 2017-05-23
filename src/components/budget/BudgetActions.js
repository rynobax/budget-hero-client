import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../config';

const requestBudget = () => {
  return {
    type: 'REQUEST_BUDGET'
  };
};

const recieveBudget = (budgetItems) => {
  return {
    type: 'RECIEVE_BUDGET',
    categories: budgetItems.reduce((arr, {category, ...item}) => {
      for(const addedCategory of arr){
        if(addedCategory.name == category){
          addedCategory.items.push(item);
          return arr;
        }
      }
      arr.push({
        name: category,
        items: [item]
      });
      return arr;
    }, [])
  };
};

const fetchBudget = () => {
  function handleErrors(response) {
      if (!response.ok) throw Error(response.statusText);
      return response;
  }

  return function (dispatch) {
    dispatch(requestBudget());
    return fetch(API_BASE + 'budget')
      .then(handleErrors)
      .then(response => response.json())
      .then((budgetItems) => {
        dispatch(recieveBudget(budgetItems));
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
