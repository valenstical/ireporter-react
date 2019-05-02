import { createSelector } from 'reselect';

/**
 * Selectors for accessing the redux state values
 * @param {object} state A reference to the state in the redux store
 */
export const userSelector = state => state.user;
export const createReportSelector = state => state.createReport;
export const getReportSelector = state => state.report;
export const getReportsSelector = state => state.reports;


/**
 * Selectors created by the reselect library for memoized functions
 */
export const getUser = createSelector(userSelector, user => user);
export const getReport = createSelector(getReportSelector, report => report);
export const getReports = createSelector(getReportsSelector, reports => reports);
export const getCreatedReport = createSelector(createReportSelector, report => report);
export const getSummary = createSelector(getReportsSelector, (reports) => {
  const { data } = reports;
  const summary = {
    pending: 0, investigating: 0, rejected: 0, resolved: 0
  };

  data.forEach((report) => {
    summary.pending += report.status === 'draft';
    summary.investigating += report.status === 'under investigation';
    summary.rejected += report.status === 'rejected';
    summary.resolved += report.status === 'resolved';
  });
  return summary;
});
