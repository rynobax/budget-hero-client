import UIReducer from './UIReducer';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(
      UIReducer(undefined, {})
    ).toEqual(
      {
        periodValue: 4
      }
    );
  });

  it('should handle UPDATE_UI_PERIOD', () => {
    expect(
      UIReducer({
        periodValue: 4
      }, {
        type: 'UPDATE_UI_PERIOD',
        periodValue: 2
      })
    ).toEqual(
      {
        periodValue: 2
      }
    );
  });
});