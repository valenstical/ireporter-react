import { authTypes, logoutType } from '../actions/authAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
export default (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case authTypes.loading:
      return {
        ...state, isBusy: true, message: []
      };
    case authTypes.success:
      return {
        ...state, ...data, message: ['Please wait while we redirect you...'], success: true, isLoggedIn: true, isBusy: false
      };
    case authTypes.failure:
      return {
        ...state, isBusy: false, message: data, success: false
      };
    case logoutType.success:
      return {
        isBusy: false,
        message: [],
        success: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
