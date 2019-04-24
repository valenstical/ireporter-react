import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: loginReducer,
});
