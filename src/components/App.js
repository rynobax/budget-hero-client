import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/Header';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
      </div>
    </MuiThemeProvider>
  );
};

export default App;