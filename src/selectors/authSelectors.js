import { createSelector } from 'reselect';

/**
 * Selectors used for login and signup
 * @param {object} state A reference to the state in the redux store
 */
export const isBusySelector = state => state.user.isBusy;
export const messageSelector = state => state.user.message;
export const authSuccessSelector = state => state.user.success;


/**
 * Selectors created by the reselect library for memoized functions
 */
export const getIsBusy = createSelector(isBusySelector, status => status);
export const getMessage = createSelector(messageSelector, message => message);
export const getAuthSuccess = createSelector(authSuccessSelector, status => status);
