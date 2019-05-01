import typeGenerator, { action } from './actionTypes';
import request from '../utils/request';

export const getReportTypes = typeGenerator('GET_REPORT');

/**
 * Fetches red-flags and intervention reports from the server
 * @param {string} route The route to fetch results from
 * @returns {object} The axios request promise object
 */
const fetchReports = route => async (dispatch) => {
  dispatch(action(getReportTypes.loading, true));
  return request({
    route,
    method: 'get',
  }).then((response) => {
    const { data } = response.data;
    dispatch(action(getReportTypes.success, data));
  }).catch((error) => {
    const data = error.response ? [] : ['Please check your network connection'];
    dispatch(action(getReportTypes.failure, data));
  });
};
export default fetchReports;
