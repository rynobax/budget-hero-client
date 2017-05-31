export default (state = {
    isLoggedIn: false
  }, action) => {
  console.log('action: ', action);
  switch (action.type){
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoggedIn: true
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        isLoggedIn: false
      });
    default:
      return state;
  }
};