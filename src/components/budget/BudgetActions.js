import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../config';

const requestBudget = () => {
  return {
    type: 'REQUEST_BUDGET'
  };
};

const recieveBudget = (categoryItems, budgetItems) => {
  return {
    type: 'RECIEVE_BUDGET',
    budget: {
      categories: categoryItems.map(category => {
        return Object.assign({}, category, {
          items: budgetItems.filter(item => {
            return item.category == category._id;
          })
        });
      })
    }
  };
};

const fetchBudget = () => {
  function handleErrors(response) {
      if (!response.ok) throw Error(response.statusText);
      return response;
  }

  function getBudgetItems() {
    return fetch(API_BASE + 'budget')
      .then(handleErrors)
      .then(response => response.json());
  }

  function getCategoryItems() {
    return fetch(API_BASE + 'category')
      .then(handleErrors)
      .then(response => response.json());
  }

  return function (dispatch) {
    dispatch(requestBudget());
    return Promise.all([getCategoryItems(), getBudgetItems()])
      .then((items) => {
        const categoryItems = items[0];
        const budgetItems = items[1];
        dispatch(recieveBudget(categoryItems, budgetItems));
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
