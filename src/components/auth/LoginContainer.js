import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = ({auth}) => {
  return {
    isLoggedIn: auth.loggedIn
  };
};

// Use connect to put them together
export default connect(mapStateToProps)(Login);