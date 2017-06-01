import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import {API_BASE} from '../../../config';
import {fetchBudgetIfNeeded} from './BudgetActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async budget actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('handles RECIEVE_BUDGET', () => {
    nock(API_BASE)
      .get('/budget')
      .reply(200, [
        {
          name: 'Utilities',
          items: [
              {
                name: 'Water',
              },
              {
                name: 'Electricity',
              }
            ]
        },
        {
          name: 'Personal',
          items: [
            {
              name: 'Spending',
            }
          ]
        }
      ]);

    const expectedActions = [
      { type: 'REQUEST_BUDGET' },
      {
        type: 'RECIEVE_BUDGET',
        categories: [
          {
            name: 'Utilities',
            items: [
                {
                  name: 'Water',
                },
                {
                  name: 'Electricity',
                }
              ]
          },
          {
            name: 'Personal',
            items: [
              {
                name: 'Spending',
              }
            ]
          }
        ]
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