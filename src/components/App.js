import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/Header';
import { browserHistory } from 'react-router';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log('props: ', this.props);
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      console.log('You arent logged in!');
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
