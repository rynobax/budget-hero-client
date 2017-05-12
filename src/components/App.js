import React  from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Page from './Page';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = (props) => {
  return (
    <MuiThemeProvider>
      <Page {...props}/>
    </MuiThemeProvider>
  );
};

export default App