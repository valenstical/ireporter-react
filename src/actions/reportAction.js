import typeGenerator, { action } from './actionTypes';
import request from '../utils/request';

export const createReportTypes = typeGenerator('CREATE_REPORT');

/**
 * Creates or edit a report
 * @param {object} payload An object containing the request parameters
 * @returns {object} The axios request promise object
 */
const reportIncident = payload => async (dispatch, getState) => {
  dispatch(action(createReportTypes.loading, true));
  const { user: { token } } = getState();
  return request({
    route: `${payload.type}s`,
    method: 'post',
    payload,
    token
  }).then((response) => {
    const { data } = response.data;
    const { message } = { ...data[0] };
    dispatch(action(createReportTypes.success, message));
  }).catch((err) => {
    let message = ['Please check your network connection'];
    if (err.response) {
      const { data: { error } } = err.response;
      message = error;
    }
    dispatch(action(createReportTypes.failure, message));
  });
};
export default reportIncident;
