import { connect } from 'react-redux';
import Entry from './Entry';

function mapStateToProps({auth}) {
  return {
    isLoggedIn: auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Entry);
