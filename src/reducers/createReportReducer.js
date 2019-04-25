import { createReportTypes } from '../actions/reportAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
export default (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case createReportTypes.loading:
      return {
        ...state, isBusy: true, message: []
      };
    case createReportTypes.success:
      return {
        ...state, message: [data], success: true, isBusy: false
      };
    case createReportTypes.failure:
      return {
        ...state, isBusy: false, message: data, success: false
      };
    default:
      return state;
  }
};
