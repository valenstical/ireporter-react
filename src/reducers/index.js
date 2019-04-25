import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reportReducer from './createReportReducer';
/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: authReducer,
  report: reportReducer,
});
