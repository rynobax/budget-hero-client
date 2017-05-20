import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import {API_BASE} from '../../config';
import {fetchBudgetIfNeeded} from './BudgetActions';

const m_iddlewares = [ thunk ];
const mockStore = configureMockStore(m_iddlewares);

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
          _id: 0
        },
        {
          name: 'Electricity',
          category: 0,
          _id: 1
        },
        {
          name: 'Spending',
          category: 1,
          _id: 2
        }
      ]);

    nock(API_BASE)
      .get('/category')
      .reply(200, [
        {
          name: 'Utilities',
          _id: 0
        },
        {
          name: 'Personal',
          _id: 1
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
              _id: 0,
              items: [
                {
                  name: 'Water',
                  category: 0,
                  _id: 0
                },
                {
                  name: 'Electricity',
                  category: 0,
                  _id: 1
                }
              ]
            },
            {
              name: 'Personal',
              _id: 1,
              items: [
                {
                  name: 'Spending',
                  category: 1,
                  _id: 2
                }
              ]
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