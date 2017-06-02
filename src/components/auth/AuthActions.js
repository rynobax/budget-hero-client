import fetch from 'isomorphic-fetch';
import {API_BASE} from '../../config';

function handleErrors(response) {
  if (!response.ok) {
    return response.text().then((text) => {
      throw Error(text);
    }).catch(err => {
      throw Error(err);
    });
  }
  else return response;
}

const logoutAction = () => {
  return {
    type: 'LOGOUT'
  };
};

export function logout(){
  return (dispatch) => {
    return fetch(API_BASE + 'user/logout', {method: 'POST', credentials: 'include'})
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
    return fetch(API_BASE + 'user/login', {
        method: 'POST', 
        body: JSON.stringify({username: username, password: password}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
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
  return fetch(API_BASE + 'user/register', {
      method: 'POST', 
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
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
