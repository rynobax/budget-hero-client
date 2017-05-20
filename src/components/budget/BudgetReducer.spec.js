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
        budget: {
          categories: [
            {
              name: 'Utilities',
              items: [
                {
                  name: 'Electrical',
                  type: 'VALUE',
                  amount: 50
                },
                {
                  name: 'Water',
                  type: 'VALUE',
                  amount: 25
                }
              ]
            },
            {
              name: 'Personal',
              items: [
                {
                  name: 'Spending',
                  type: 'PERCENT',
                  amount: 10
                }
              ]
            }
          ]
        }
      })
    ).toEqual(
      {
        isFetching: false,
        categories: [
          {
            name: 'Utilities',
            items: [
              {
                name: 'Electrical',
                type: 'VALUE',
                amount: 50
              },
              {
                name: 'Water',
                type: 'VALUE',
                amount: 25
              }
            ]
          },
          {
            name: 'Personal',
            items: [
              {
                name: 'Spending',
                type: 'PERCENT',
                amount: 10
              }
            ]
          }
        ]
      }
    );
  });
});