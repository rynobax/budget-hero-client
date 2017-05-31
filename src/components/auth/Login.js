import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

export default class AuthPage extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      usernameError: '',
      passwordError: ''
    }
    
    this.username = '';
    this.onUsernameChange = (_e, newValue) => this.username = newValue;

    this.password = '';
    this.onPasswordChange = (_e, newValue) => this.password = newValue;

    this.submit = () => {
      props.login(this.username, this.password)
        .then((res) => {
          this.setState(Object.assign({}, this.state, {usernameError: ''}));
          this.setState(Object.assign({}, this.state, {passwordError: ''}));
          if(!res.loggedIn){
            if(res.error){
              const errors = res.error.split('\n');
              errors.forEach((err) => {
                if(err.toLowerCase().includes('username')) this.setState(Object.assign({}, this.state, {usernameError: err}));
                if(err.toLowerCase().includes('account')) this.setState(Object.assign({}, this.state, {usernameError: err}));
                if(err.toLowerCase().includes('password')) this.setState(Object.assign({}, this.state, {passwordError: err}));
              });
            } else {
              // We didn't log in but got an error.  This should never happen
              console.log(res);
            }
          } else {
            // Login was successful so redirect
            console.log('success');
            browserHistory.push('/');
          }
        });
    };
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Username"
          floatingLabelFixed={true}
          type={'text'}
          onChange={this.onUsernameChange}
          errorText={this.state.usernameError}
        /><br />  
        <TextField
          floatingLabelText="Password"
          floatingLabelFixed={true}
          type={'password'}
          onChange={this.onPasswordChange}
          errorText={this.state.passwordError}
        /><br />
        <RaisedButton
          label="Submit"
          primary={true}
          onTouchTap={this.submit}
        />
      </div>
    );
  }
}