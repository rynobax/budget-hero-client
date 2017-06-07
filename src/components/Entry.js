import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app/App';
import AuthContainer from './auth/AuthContainer';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {
    primary1Color: "#4caf50", // Primary neutral
    primary2Color: "#087f23", // Primary dark
    primary3Color: "#80e27e", // Primary light
    accent1Color: "#a05f8a", // Secondary neutral
    accent2Color: grey100, // Secondary light or grey
    accent3Color: grey500, // Secondary dark or gery
    textColor: "#0B1A0C", // Black
    secondaryTextColor: grey500, // Grey
    alternateTextColor: white, // White
    canvasColor: white, // White
    borderColor: "#dfc9d7", // Light Grey
    disabledColor: grey500, // Light grey
    pickerHeaderColor: "#21de60", // Primary neutral
    clockCircleColor: grey100, // Very light grey
    shadowColor: fullBlack,
  },
});


const Entry = (props) => {
  props.identity(); // Get identity to see if the user is logged in
  if (props.isLoggedIn) {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <App/>
      </MuiThemeProvider>
    );
  } else {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AuthContainer/>
      </MuiThemeProvider>
      );
  }
};

export default Entry;
