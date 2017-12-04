import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  search: ''
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return { 
        ...state,
        search: action.search 
      };
    default:
      return state;
  }

  return state;
}

const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'))

registerServiceWorker();