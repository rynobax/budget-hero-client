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
        isFetching: false
      }, {
        type: 'REQUEST_BUDGET'
      })
    ).toEqual(
      {
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
        categories: [
          {
            name: 'Utilities',
            items: [
              {
                name: 'Water'
              },
              {
                name: 'Electricity'
              }
            ]
          },
          {
            name: 'Personal',
            items: [
              {
                name: 'Spending'
              }
            ]
          }
        ]
      })
    ).toEqual(
      {
        isFetching: false,
        categories: [
          {
            name: 'Utilities',
            items: [
              {
                name: 'Water'
              },
              {
                name: 'Electricity'
              }
            ]
          },
          {
            name: 'Personal',
            items: [
              {
                name: 'Spending'
              }
            ]
          }
        ]
      }
    );
  });

  it('should handle ADD_BUDGET_ITEM with empty category', () => {
    expect(
      budgetReducer({
        categories: [],
        isFetching: false
      }, {
        type: 'ADD_BUDGET_ITEM',
        item: {
          name: 'Rent',
          category: 'Bills',
          period: 'WEEKLY',
          type: 'VALUE',
          amount: '500'
        }
      })
    ).toEqual(
      {
        isFetching: false,
        categories: [
          {
            name: 'Bills',
            items: [
              {
                name: 'Rent',
                period: 'WEEKLY',
                type: 'VALUE',
                amount: '500'
              }
            ]
          }
        ]
      }
    )
  });
});