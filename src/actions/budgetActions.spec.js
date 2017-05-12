import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import {API_BASE} from '../config';
import {fetchBudgetIfNeeded} from './budgetActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('handles RECIEVE_BUDGET', () => {
    nock(API_BASE)
      .get('/budget')
      .reply(200, [
        {
          name: 'Water',
          category: 0,
          id: 0
        },
        {
          name: 'Electricity',
          category: 0,
          id: 1
        },
        {
          name: 'Spending',
          category: 1,
          id: 2
        },
        {
          name: 'Food',
          id: 3
        }
      ]);

    nock(API_BASE)
      .get('/category')
      .reply(200, [
        {
          name: 'Utilities',
          id: 0
        },
        {
          name: 'Personal',
          id: 1
        }
      ]);

    const expectedActions = [
      { type: 'REQUEST_BUDGET' },
      {
        type: 'RECIEVE_BUDGET', 
        budget: {
          categories: [
            {
              name: 'Utilities',
              id: 0
            },
            {
              name: 'Personal',
              id: 1
            }
          ],
          items: [
            {
              name: 'Water',
              category: 0,
              id: 0
            },
            {
              name: 'Electricity',
              category: 0,
              id: 1
            },
            {
              name: 'Spending',
              category: 1,
              id: 2
            },
            {
              name: 'Food',
              id: 3
            }
          ]
        }
      }
    ];
    const store = mockStore({
        budget: {
            isFetching: false
        }
    });

    return store.dispatch(fetchBudgetIfNeeded())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});