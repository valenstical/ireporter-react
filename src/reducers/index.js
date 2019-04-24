import { combineReducers } from 'redux';
import authReducer from './authReducer';

/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: authReducer,
});
