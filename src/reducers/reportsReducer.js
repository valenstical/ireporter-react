import { createReportTypes } from '../actions/reportAction';
import { getReportTypes, getReportsTypes } from '../actions/getReportAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
export const createReportReducer = (state = {}, action) => {
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

export const getReportReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case getReportTypes.loading:
      return {
        ...state, isBusy: true
      };
    case getReportTypes.success:
      return {
        ...state, data, success: true, isBusy: false
      };
    case getReportTypes.failure:
      return {
        ...state, isBusy: false, success: false, redirect: data.length === 0
      };
    default:
      return state;
  }
};

export const getReportsReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case getReportsTypes.loading:
      return {
        ...state, isBusy: true, active: data
      };
    case getReportsTypes.success:
      return {
        ...state, data, success: true, isBusy: false
      };
    case getReportsTypes.failure:
      return {
        ...state, isBusy: false, success: false, data
      };
    default:
      return state;
  }
};
