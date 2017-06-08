import { connect } from 'react-redux';
import Title from './Title';
import {logout} from '../../auth/AuthActions';

const mapStateToProps = ({auth}) => {
  return {
    identity: auth.identity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Title);