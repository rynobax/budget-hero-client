import IncomeReducer from './IncomeReducer';

describe('income reducer', () => {
  it('should return the initial state', () => {
    expect(
      IncomeReducer(undefined, {})
    ).toEqual(
      {
        amount: 0,
        period: 4,
        isFetching: false
      }
    );
  });

  it('should handle REQUEST_INCOME', () => {
    expect(
      IncomeReducer({
        isFetching: false
      }, {
        type: 'REQUEST_INCOME'
      })
    ).toEqual(
      {
        isFetching: true
      }
    );
  });

  it('should handle RECIEVE_INCOME', () => {
    expect(
      IncomeReducer({
        amount: 0,
        period: 3,
        isFetching: true
      }, {
        type: 'RECIEVE_INCOME',
        income: {
          amount: 1000,
          period: 2,
        }
      })
    ).toEqual(
      {
        isFetching: false,
        amount: 1000,
        period: 2,
      }
    );
  });

  it('should handle UPDATE_INCOME', () => {
    expect(
      IncomeReducer({
        amount: 1000,
        period: 2,
        isFetching: false
      }, {
        type: 'UPDATE_INCOME',
        income: {
          amount: 100000,
          period: 4
        }
      })
    ).toEqual(
      {
        isFetching: false,
        amount: 100000,
        period: 4
      }
    );
  });
});