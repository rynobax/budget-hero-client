import React  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      browserHistory.push('/login');
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps({auth}) {
  return {
    isLoggedIn: auth.loggedIn
  };
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)