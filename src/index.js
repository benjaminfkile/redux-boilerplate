import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }

      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
  }
  return state
}

const userReducer = (state = {
  name: null,
  age: null
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
  }
  return state
}

// const myLogger = (store) => (next) => (action) => {
//   console.log("Logged Action: ", action)
//   next(action)
// }

const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(/*myLogger,*/ logger)
)

store.subscribe(() => {
  // console.log("Store updated:", store.getState())
})

// store.dispatch({
//   type: "ADD",
//   payload: 1
// })


// store.dispatch({
//   type: "SUBTRACT",
//   payload: 1
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


