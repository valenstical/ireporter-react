import '@babel/polyfill';
import loginReducer from '../../src/reducers/authReducer';
import { authTypes } from '../../src/actions/authAction';
import { mockState } from '../setup';


describe('Login Reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(mockState, {})).toEqual(mockState);
  });
  it('should return the initial state if it is not set', () => {
    expect(loginReducer(undefined, {})).toEqual({});
  });
  it('should return the correct state when loading', () => {
    const action = { type: authTypes.loading, data: true };
    expect(loginReducer({}, action)).toEqual({ isBusy: true, message: [] });
  });
  it('should return the correct state on success', () => {
    const action = { type: authTypes.success, data: { firstname: 'john' } };
    expect(loginReducer({}, action)).toEqual({
      firstname: 'john', message: ['Please wait while we redirect you...'], success: true, isBusy: false, isLoggedIn: true
    });
  });
  it('should return the correct state on failure', () => {
    const action = { type: authTypes.failure, data: ['failed'] };
    expect(loginReducer({}, action)).toEqual({ message: ['failed'], success: false, isBusy: false });
  });
});
