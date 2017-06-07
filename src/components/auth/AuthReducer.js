export default (state = {
    isLoggedIn: false,
    identity: {}
  }, action) => {
  switch (action.type){
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoggedIn: true
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        isLoggedIn: false
      });
    case 'IDENTITY':
      return Object.assign({}, state, {
        isLoggedIn: true,
        identity: action.identity
      });
    default:
      return state;
  }
};