import { toast } from 'react-toastify';
import request from '../utils/request';

/**
 * Updates the incident
 * @param {object} payload The request payload
 * @returns {object} The axios request promise object
 */
const updateReport = payload => async (dispatch, getState) => {
  const { user: { token } } = getState();
  return request({
    route: payload.route,
    method: 'patch',
    payload,
    token
  }).then((response) => {
    const { data } = response.data;
    toast.success(data[0].message);
  }).catch((error) => {
    toast.error(error.response ? error.response.data.error[0] : 'Please check your network connection');
  });
};
export default updateReport;
