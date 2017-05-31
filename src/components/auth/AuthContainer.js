import { connect } from 'react-redux';
import AuthPage from './AuthPage';
import {login, register} from './AuthActions';

const mapStateToProps = ({auth}) => {
  return {
    isLoggedIn: auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
    register: register
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);