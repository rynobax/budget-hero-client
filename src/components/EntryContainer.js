import { connect } from 'react-redux';
import Entry from './Entry';
import {identity} from './auth/AuthActions';

function mapStateToProps({auth}) {
  return {
    isLoggedIn: auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    identity: () => dispatch(identity()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Entry);
