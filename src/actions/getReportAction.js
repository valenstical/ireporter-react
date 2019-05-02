import typeGenerator, { action } from './actionTypes';
import request from '../utils/request';

export const getReportTypes = typeGenerator('GET_REPORT');
export const getReportsTypes = typeGenerator('GET_REPORTS');


/**
 * Fetches red-flags and intervention reports from the server
 * @param {string} route The route to fetch results from
 * @returns {object} The axios request promise object
 */
const fetchReports = (route, all = false, type = null) => async (dispatch, getState) => {
  const actionType = all ? getReportsTypes : getReportTypes;
  const path = type === '' ? 'incidents' : route;
  const { user: { token } } = getState();
  dispatch(action(actionType.loading, type));
  return request({
    route: path,
    method: 'get',
    token,
  }).then((response) => {
    const { data } = response.data;
    dispatch(action(actionType.success, data));
  }).catch((error) => {
    const data = error.response ? [] : ['Please check your network connection'];
    dispatch(action(actionType.failure, data));
  });
};
export default fetchReports;
