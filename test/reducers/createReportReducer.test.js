import '@babel/polyfill';
import { mockState } from '../setup';
import createReportReducer from '../../src/reducers/createReportReducer';
import { createReportTypes } from '../../src/actions/reportAction';


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
