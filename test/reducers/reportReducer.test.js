import { mockState } from '../setup';
import { createReportReducer, getReportReducer } from '../../src/reducers/reportsReducer';
import { createReportTypes } from '../../src/actions/reportAction';
import { getReportTypes } from '../../src/actions/getReportAction';


describe('Create report Reducer', () => {
  it('should return the initial state', () => {
    expect(createReportReducer(mockState, {})).toEqual(mockState);
  });
  it('should return the initial state if it is not set', () => {
    expect(createReportReducer(undefined, {})).toEqual({});
  });
  it('should return the correct state when loading', () => {
    const action = { type: createReportTypes.loading, data: true };
    expect(createReportReducer({}, action)).toEqual({ isBusy: true, message: [] });
  });
  it('should return the correct state on success', () => {
    const action = { type: createReportTypes.success, data: 'success' };
    expect(createReportReducer({}, action)).toEqual({ message: ['success'], success: true, isBusy: false });
  });
  it('should return the correct state on failure', () => {
    const action = { type: createReportTypes.failure, data: ['failed'] };
    expect(createReportReducer({}, action)).toEqual({ message: ['failed'], success: false, isBusy: false });
  });
});

describe('Get report Reducer', () => {
  it('should return the initial state', () => {
    expect(getReportReducer(mockState, {})).toEqual(mockState);
  });
  it('should return the initial state if it is not set', () => {
    expect(getReportReducer(undefined, {})).toEqual({});
  });
  it('should return the correct state when loading', () => {
    const action = { type: getReportTypes.loading, data: true };
    expect(getReportReducer({}, action)).toEqual({ isBusy: true });
  });
  it('should return the correct state on success', () => {
    const action = { type: getReportTypes.success, data: 'success' };
    expect(getReportReducer({}, action)).toEqual({ data: 'success', success: true, isBusy: false });
  });
  it('should return the correct state on failure', () => {
    const action = { type: getReportTypes.failure, data: [] };
    expect(getReportReducer({}, action)).toEqual({ redirect: true, success: false, isBusy: false });
  });
  it('should return the correct state on unkown error', () => {
    const action = { type: getReportTypes.failure, data: ['No network'] };
    expect(getReportReducer({}, action)).toEqual(
      { redirect: false, success: false, isBusy: false }
    );
  });
});
