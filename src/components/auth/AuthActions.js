import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../config';

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}

const logoutAction = () => {
  return {
    type: 'LOGOUT'
  };
};

export function logout(){
  return (dispatch) => {
    return fetch(API_BASE + 'auth/logout', {method: 'POST'})
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.loggedOut) dispatch(logoutAction());
        return response;
      })
      .catch((err) => {
        return {
          loggedOut: false,
          error: err
        };
      });
  };
}

const loginAction = () => {
  return {
    type: 'LOGIN'
  };
};

export function login(username, password){
  return (dispatch) => {
    return fetch(API_BASE + 'auth/login', {
        method: 'POST', 
        body: JSON.stringify({username: username, password: password}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        if(response.loggedIn) dispatch(loginAction());
        return response;
      })
      .catch((err) => {
        return {
          loggedIn: false,
          error: err
        };
      });
  };
}

export function register(username, password){
  return fetch(API_BASE + 'auth/register', {
      method: 'POST', 
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(handleErrors)
    .then(response => response.json())
    .then((response) => {
      if(response.registered) login(username, password).then(console.log);
      return response;
    })
    .catch((err) => {
      return {
        registered: false,
        error: err
      };
    });
}
