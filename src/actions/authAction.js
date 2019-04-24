import typeGenerator from './actionTypes';
import request from '../utils/request';
import { saveUser } from '../utils/helpers';

export const authTypes = typeGenerator('AUTHENTICATIONS');

/**
 * Action creator for  login and signup operations
 * @param {string} type The action type
 * @param {object} data The data to dispatch
 */
export const authAction = (type, data) => ({ type, data });

/**
 * Authenticates the user credentials
 * @param {object} payload An object containing the request parameters
 * @returns {object} The axios request promise object
 */
const authenticate = payload => async (dispatch) => {
  dispatch(authAction(authTypes.loading, true));
  return request({
    route: `auth/${payload.route}`,
    method: 'post',
    payload,
  }).then((response) => {
    const { data } = response.data;
    const { token, user } = { ...data[0] };
    const profile = { token, ...user };
    saveUser(profile);
    dispatch(authAction(authTypes.success, profile));
  }).catch((err) => {
    let message = ['Please check your network connection'];
    if (err.response) {
      const { data: { error } } = err.response;
      message = error;
    }
    dispatch(authAction(authTypes.failure, message));
  });
};
export default authenticate;
