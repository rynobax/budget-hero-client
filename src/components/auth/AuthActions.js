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
        if(response.loggedOut) dispatch(logoutAction);
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

export function login(){
  return (dispatch) => {
    return fetch(API_BASE + 'auth/login', {method: 'POST'})
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        if(response.loggedIn) dispatch(loginAction);
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

