import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';

class Register extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      usernameError: '',
      passwordError: ''
    };
    
    this.username = '';
    this.onUsernameChange = (_e, newValue) => this.username = newValue;

    this.password = '';
    this.onPasswordChange = (_e, newValue) => this.password = newValue;

    this.submit = () => {
      const username = this.username;
      const password = this.password;
      props.register(username, password)
        .then((res) => {
          if(!res.registered){
            this.setState(Object.assign({}, this.state, {usernameError: ''}));
            this.setState(Object.assign({}, this.state, {passwordError: ''}));
            if(res.error){
              const errors = res.error.split('\n');
              errors.forEach((err) => {
                if(err.toLowerCase().includes('username')) this.setState(Object.assign({}, this.state, {usernameError: err}));
                if(err.toLowerCase().includes('account')) this.setState(Object.assign({}, this.state, {usernameError: err}));
                if(err.toLowerCase().includes('password')) this.setState(Object.assign({}, this.state, {passwordError: err}));
              });
            } else {
              console.log('Registered failed without an error: ', res);
            }
          } else {
            props.login(username, password);
          }
        });
    };
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <Paper style={this.props.paperStyle} zDepth={this.props.paperDepth} >
          <h1 style={{color: this.props.muiTheme.palette.textColor}}>Register for Budget Hero</h1>
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
        </Paper>
      </div>
    );
  }
}

export default muiThemeable()(Register);
