import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import initialState from './initialState';
import reducer from '../reducers';

/**
 * Creates an instance of the redux store to be used across the whole application
 * @param {object} reducer The reducer function
 * @param {object} initialState The initial state of the store
 * @param {array} middleware An array of all middleware to use with the store
 * @returns {object} The created redux store
*/
export default createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
