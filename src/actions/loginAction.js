import typeGenerator from './actionTypes';
import request from '../utils/request';
import { saveUser } from '../utils/helpers';

export const loginTypes = typeGenerator('LOG_IN');

/**
 * Action creator for login operations
 * @param {string} type The action type
 * @param {object} data The data to dispatch
 */
export const loginAction = (type, data) => ({ type, data });

/**
 * Authenticates the user credentials
 * @param {object} payload An object containing the username and password
 * @returns {object} The axios request promise object
 */
const login = payload => async (dispatch) => {
  dispatch(loginAction(loginTypes.loading, true));
  return request({
    route: 'auth/login',
    method: 'post',
    payload,
  }).then((response) => {
    const { data } = response.data;
    const { token, user } = { ...data[0] };
    const profile = { token, ...user };
    saveUser(profile);
    dispatch(loginAction(loginTypes.success, profile));
  }).catch((err) => {
    let message = ['Please check your network connection'];
    if (err.response) {
      const { data: { error } } = err.response;
      message = error;
    }
    dispatch(loginAction(loginTypes.failure, message));
  });
};
export default login;
