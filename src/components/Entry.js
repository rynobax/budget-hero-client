import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app/App';
import AuthContainer from './auth/AuthContainer';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Entry = (props) => {
  if (props.isLoggedIn) {
    return (
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    );
  } else {
    return (
      <MuiThemeProvider>
        <AuthContainer/>
      </MuiThemeProvider>
      );
  }
};

export default Entry;
