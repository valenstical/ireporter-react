import typeGenerator, { action } from './actionTypes';
import request from '../utils/request';

export const authTypes = typeGenerator('AUTHENTICATIONS');
export const logoutType = typeGenerator('LOGOUT');


/**
 * Authenticates the user credentials
 * @param {object} payload An object containing the request parameters
 * @returns {object} The axios request promise object
 */
const authenticate = payload => async (dispatch, getState) => {
  dispatch(action(authTypes.loading, true));
  const { user: { token: key } } = getState();
  return request({
    route: payload.route,
    method: payload.method,
    payload,
    token: key,
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

/**
 * Logs out the user
 * @returns {void}
 */
export const logout = () => (dispatch) => {
  dispatch(action(logoutType.success));
};

export default authenticate;
