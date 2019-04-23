import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import initialState from './initialState';
import rootReducer from '../reducers';

/**
 * @constant store - created store
 * @exports object - An object of the store
 */

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
