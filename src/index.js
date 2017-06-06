// Babel polyfill will emulate a full
// ES2015 environemnt so we can enjoy goodies like
// Promises
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import EntryContainer from './components/EntryContainer';
import './img/favicon.ico';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <EntryContainer />
  </Provider>,
  document.getElementById('app')
);