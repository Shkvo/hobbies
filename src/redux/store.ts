import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import initialState from './initialState';

let store = createStore(reducer, initialState, composeWithDevTools());

export default store;