import typeGenerator from './actionTypes';
import request from '../utils/request';

export const createReportTypes = typeGenerator('CREATE_REPORT');
export const getReportTypes = typeGenerator('GET_REPORT');

/**
 * Action creator for create and update reports
 * @param {string} type The action type
 * @param {object} data The data to dispatch
 */
export const createReportAction = (type, data) => ({ type, data });

/**
 * Gets reports
 * @param {string} route An expected route
 * @returns {object} The axios request promise object
 */
const reportIncident = payload => async (dispatch) => {
  const actionType = payload.method === 'get' ? getReportTypes : createReportTypes;
  dispatch(createReportAction(actionType.loading, true));
  return request({
    route: payload.route,
    method: payload.method,
    payload,
  }).then((response) => {
    const { data } = response.data;
    dispatch(createReportAction(actionType.success, data[0]));
  }).catch((err) => {
    let message = ['Please check your network connection'];
    if (err.response) {
      const { data: { error } } = err.response;
      message = error;
    }
    dispatch(createReportAction(actionType.failure, message));
  });
};

// export const getIncident = route => async (dispatch) => {
//   dispatch(createReportAction(getReportTypes.loading, true));
//   return request({
//     route,
//     method: 'get',
//   }).then((response) => {
//     const { data } = response.data;
//     dispatch(createReportAction(getReportTypes.success, data));
//   }).catch((err) => {
//     let message = ['Please check your network connection'];
//     if (err.response) {
//       const { data: { error } } = err.response;
//       message = error;
//     }
//     dispatch(createReportAction(getReportTypes.failure, message));
//   });
// };
export default reportIncident;
