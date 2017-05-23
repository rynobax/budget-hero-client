import budgetReducer from './BudgetReducer';

describe('budget reducer', () => {
  it('should return the initial state', () => {
    expect(
      budgetReducer(undefined, {})
    ).toEqual(
      {
        categories: [],
        isFetching: false
      }
    );
  });

  it('should handle REQUEST_BUDGET', () => {
    expect(
      budgetReducer({
        categories: [],
        isFetching: false
      }, {
        type: 'REQUEST_BUDGET'
      })
    ).toEqual(
      {
        categories: [],
        isFetching: true
      }
    );
  });

  it('should handle RECIEVE_BUDGET', () => {
    expect(
      budgetReducer({
        categories: [],
        isFetching: true
      }, {
        type: 'RECIEVE_BUDGET',
        categories: {
          'Utilities': [
                {
                  name: 'Water',
                },
                {
                  name: 'Electricity',
                }
              ],
          'Personal':[
              {
                name: 'Spending',
              }
            ]
        }
      })
    ).toEqual(
      {
        isFetching: false,
        categories: {
          'Utilities': [
                {
                  name: 'Water',
                },
                {
                  name: 'Electricity',
                }
              ],
          'Personal':[
              {
                name: 'Spending',
              }
            ]
        }
      }
    );
  });
});