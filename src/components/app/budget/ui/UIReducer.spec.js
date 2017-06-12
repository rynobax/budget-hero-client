import UIReducer from './UIReducer';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(
      UIReducer(undefined, {})
    ).toEqual(
      {
        period: 4
      }
    );
  });

  it('should handle UPDATE_UI_PERIOD', () => {
    expect(
      UIReducer({
        period: 4
      }, {
        type: 'UPDATE_UI_PERIOD',
        period: 2
      })
    ).toEqual(
      {
        period: 2
      }
    );
  });
});