import { connect } from 'react-redux';
import Title from './Title';
import {logout} from '../../auth/AuthActions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Title);