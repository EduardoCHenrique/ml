import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  search: ''
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return { 
        ...state,
        search: action.search 
      }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))