import { createSelector } from 'reselect';

/**
 * Selectors for accessing the redux state values
 * @param {object} state A reference to the state in the redux store
 */
export const userSelector = state => state.user;
export const createReport = state => state.report;


/**
 * Selectors created by the reselect library for memoized functions
 */
export const getUser = createSelector(userSelector, user => user);
export const getReport = createSelector(createReport, report => report);
