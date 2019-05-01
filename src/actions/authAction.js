import typeGenerator, { action } from './actionTypes';
import request from '../utils/request';

export const authTypes = typeGenerator('AUTHENTICATIONS');

/**
 * Authenticates the user credentials
 * @param {object} payload An object containing the request parameters
 * @returns {object} The axios request promise object
 */
const authenticate = payload => async (dispatch) => {
  dispatch(action(authTypes.loading, true));
  return request({
    route: payload.route,
    method: payload.method,
    payload,
  }).then((response) => {
    const { data } = response.data;
    const { token, user } = { ...data[0] };
    const profile = { token, ...user };
    dispatch(action(authTypes.success, profile));
  }).catch((err) => {
    let message = ['Please check your network connection'];
    if (err.response) {
      const { data: { error } } = err.response;
      message = error;
    }
    dispatch(action(authTypes.failure, message));
  });
};
export default authenticate;
