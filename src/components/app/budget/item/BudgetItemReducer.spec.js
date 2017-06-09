import budgetItemReducer from './BudgetItemReducer';

describe('budget item reducer', () => {
  it('should return the initial state', () => {
    expect(
      budgetItemReducer(undefined, {})
    ).toEqual(
      {
        items: [],
        isFetching: false
      }
    );
  });

  it('should handle REQUEST_BUDGET_ITEMS', () => {
    expect(
      budgetItemReducer({
        isFetching: false
      }, {
        type: 'REQUEST_BUDGET_ITEMS'
      })
    ).toEqual(
      {
        isFetching: true
      }
    );
  });

  it('should handle RECIEVE_BUDGET_ITEMS', () => {
    expect(
      budgetItemReducer({
        items: [],
        isFetching: true
      }, {
        type: 'RECIEVE_BUDGET_ITEMS',
        items: [
          {
            name: 'Water',
            category: 'Utilities'
          }
        ]
      })
    ).toEqual(
      {
        isFetching: false,
        items: [
          {
            name: 'Water',
            category: 'Utilities'
          }
        ]
      }
    );
  });

  it('should handle ADD_BUDGET_ITEM', () => {
    expect(
      budgetItemReducer({
        items: [],
        isFetching: false
      }, {
        type: 'ADD_BUDGET_ITEM',
        item: {
          name: 'Rent',
          category: 'Bills',
          period: 'WEEKLY',
          amount: '500',
          id: '1'
        }
      })
    ).toEqual(
      {
        isFetching: false,
        items: [
          {
            name: 'Rent',
            category: 'Bills',
            period: 'WEEKLY',
            amount: '500',
            id: '1'
          }
        ]
      }
    );
  });

  it('should handle DELETE_BUDGET_ITEM', () => {
    expect(
      budgetItemReducer({
        isFetching: false,
        items: [
          {
            name: 'Rent',
            period: 'WEEKLY',
            type: 'VALUE',
            amount: '500',
            id: '5'
          },
          {
            name: 'Spending',
            period: 'WEEKLY',
            type: 'VALUE',
            amount: '50',
            id: '6'
          }
        ]
      }, {
        type: 'DELETE_BUDGET_ITEM',
        id: '5'
      })
    ).toEqual(
      {
        isFetching: false,
        items: [
          {
            name: 'Spending',
            period: 'WEEKLY',
            type: 'VALUE',
            amount: '50',
            id: '6'
          }
        ]
      }
    );
  });

  it('should handle DELETE_BUDGET_ITEM with 1 item left', () => {
      expect(
        budgetItemReducer({
          isFetching: false,
          items: [
            {
              name: 'Rent',
              period: 'WEEKLY',
              type: 'VALUE',
              amount: '500',
              id: '5'
            }
          ]
        }, {
          type: 'DELETE_BUDGET_ITEM',
          id: '5'
        })
      ).toEqual(
        {
          isFetching: false,
          items: []
        }
      );
    });

  it('should handle UPDATE_BUDGET_ITEM', () => {
      expect(
        budgetItemReducer({
          isFetching: false,
          items: [
            {
              name: 'Rent',
              period: 'WEEKLY',
              amount: '500',
              id: '5'
            }
          ]
        }, {
          type: 'UPDATE_BUDGET_ITEM',
          item: {
            name: 'Rent',
            category: 'Bills',
            period: 'WEEKLY',
            amount: '50',
            id: '5'
          }
        })
      ).toEqual(
        {
          isFetching: false,
          items: [
            {
              name: 'Rent',
              category: 'Bills',
              period: 'WEEKLY',
              amount: '50',
              id: '5'
            }
          ]
        }
      );
    });
});