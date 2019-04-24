import { loginTypes } from '../actions/loginAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
export default (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case loginTypes.loading:
      return {
        ...state, isBusy: true, message: []
      };
    case loginTypes.success:
      return {
        ...state, ...data, message: ['Login successful, redirecting...'], loginSuccess: true
      };
    case loginTypes.failure:
      return {
        ...state, isBusy: false, message: data, loginSuccess: false
      };
    default:
      return state;
  }
};
