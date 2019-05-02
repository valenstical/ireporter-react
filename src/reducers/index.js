import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { createReportReducer, getReportReducer, getReportsReducer } from './reportsReducer';


/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: authReducer,
  createReport: createReportReducer,
  report: getReportReducer,
  reports: getReportsReducer,
});
