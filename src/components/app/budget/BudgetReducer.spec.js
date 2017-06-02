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
    );
  });

  it('should handle DELETE_BUDGET_ITEM with a category with >1 items', () => {
    expect(
      budgetReducer({
        categories: [
          {
            name: 'Bills',
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
          }
        ],
        isFetching: false
      }, {
        type: 'DELETE_BUDGET_ITEM',
        item: {
          name: 'Rent',
          category: 'Bills',
          period: 'WEEKLY',
          type: 'VALUE',
          amount: '500',
          id: '5'
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
                name: 'Spending',
                period: 'WEEKLY',
                type: 'VALUE',
                amount: '50',
                id: '6'
              }
            ]
          }
        ]
      }
    );
  });

  it('should handle DELETE_BUDGET_ITEM with a category with 1 item', () => {
      expect(
        budgetReducer({
          categories: [
            {
              name: 'Bills',
              items: [
                {
                  name: 'Rent',
                  period: 'WEEKLY',
                  type: 'VALUE',
                  amount: '500',
                  id: '5'
                }
              ]
            }
          ],
          isFetching: false
        }, {
          type: 'DELETE_BUDGET_ITEM',
          item: {
            name: 'Rent',
            category: 'Bills',
            period: 'WEEKLY',
            type: 'VALUE',
            amount: '500',
            id: '5'
          }
        })
      ).toEqual(
        {
          isFetching: false,
          categories: []
        }
      );
    });

  it('should handle EDIT_BUDGET_ITEM WITHOUT a category change', () => {
      expect(
        budgetReducer({
          categories: [
            {
              name: 'Bills',
              items: [
                {
                  name: 'Rent',
                  period: 'WEEKLY',
                  type: 'VALUE',
                  amount: '500',
                  id: '5'
                }
              ]
            }
          ],
          isFetching: false
        }, {
          type: 'EDIT_BUDGET_ITEM',
          item: {
            name: 'Rent',
            category: 'Bills',
            period: 'WEEKLY',
            type: 'VALUE',
            amount: '50',
            id: '5'
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
                  amount: '50',
                  id: '5'
                }
              ]
            }
          ]
        }
      );
    });

  it('should handle EDIT_BUDGET_ITEM WITH a category change', () => {
      expect(
        budgetReducer({
          categories: [
            {
              name: 'Bills',
              items: [
                {
                  name: 'Rent',
                  period: 'WEEKLY',
                  type: 'VALUE',
                  amount: '500',
                  id: '5'
                }
              ]
            }
          ],
          isFetching: false
        }, {
          type: 'EDIT_BUDGET_ITEM',
          item: {
            name: 'Rent',
            category: 'Fun',
            period: 'WEEKLY',
            type: 'VALUE',
            amount: '500',
            id: '5'
          }
        })
      ).toEqual(
        {
          isFetching: false,
          categories: [
            {
              name: 'Fun',
              items: [
                {
                  name: 'Rent',
                  period: 'WEEKLY',
                  type: 'VALUE',
                  amount: '500',
                  id: '5'
                }
              ]
            }
          ]
        }
      );
    });
});