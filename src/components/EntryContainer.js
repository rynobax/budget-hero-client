import { connect } from 'react-redux';
import Entry from './Entry';

function mapStateToProps({auth}) {
  return {
    isLoggedIn: auth.isLoggedIn
  };
}

console.log('In entry container');

export default connect(mapStateToProps)(Entry);
