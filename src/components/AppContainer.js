import { connect } from 'react-redux';
import App from './App';

function mapStateToProps({auth}) {
  return {
    isLoggedIn: auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
