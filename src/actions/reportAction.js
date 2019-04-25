import typeGenerator from './actionTypes';
import request from '../utils/request';

export const createReportTypes = typeGenerator('CREATE_REPORT');

/**
 * Action creator for login and signup operations
 * @param {string} type The action type
 * @param {object} data The data to dispatch
 */
export const createReportAction = (type, data) => ({ type, data });

/**
 * Creates or edit a report
 * @param {object} payload An object containing the request parameters
 * @returns {object} The axios request promise object
 */
const reportIncident = payload => async (dispatch) => {
  dispatch(createReportAction(createReportTypes.loading, true));
  return request({
    route: payload.route,
    method: payload.method,
    payload,
  }).then((response) => {
    const { data } = response.data;
    const { message } = { ...data[0] };
    dispatch(createReportAction(createReportTypes.success, message));
  }).catch((err) => {
    let message = ['Please check your network connection'];
    if (err.response) {
      const { data: { error } } = err.response;
      message = error;
    }
    dispatch(createReportAction(createReportTypes.failure, message));
  });
};
export default reportIncident;
