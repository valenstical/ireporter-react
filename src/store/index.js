import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import initialState from './initialState';
import reducer from '../reducers';

/**
 * @constant store - created store
 * @exports object - An object of the store
 */

export default createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
