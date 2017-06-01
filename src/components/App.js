import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './app/header/Header';
import { browserHistory } from 'react-router';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      browserHistory.push('/login');
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <MuiThemeProvider>
          <div>
            <Header />
          </div>
        </MuiThemeProvider>
      );
    } else {
      return null;
    }
  }
};
