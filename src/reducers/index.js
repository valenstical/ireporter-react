import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';

/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  dummy: dummyReducer,
});
