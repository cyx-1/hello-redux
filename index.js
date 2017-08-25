// Import functions
import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';

// Create actions
export const add = createAction('add some stuff');
export const increment = createAction('increment the state');
export const decrement = createAction('decrement the state');

const DEFAULT_STATE = {
    count : 0,
    type : "normal"
}

// Create a reducer
const counterReducer = createReducer({
  [increment]: (state) => ({ ...state, count : state.count + 1 }),
  [decrement]: (state) => ({ ...state, count : state.count - 1 }),
  [add]: (state, payload) => ({ ...state, count : state.count + payload }),
}, DEFAULT_STATE); // <-- This is the default state

// Create the store
export const counterStore = createStore(counterReducer);

console.log("Completed.");