import React  from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = (props) => {
  return (
    <MuiThemeProvider>
      {/* Each smaller components */}
      {props.children}
    </MuiThemeProvider>
  );
};

export default App