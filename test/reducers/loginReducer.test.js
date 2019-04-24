import '@babel/polyfill';
import loginReducer from '../../src/reducers/loginReducer';
import { loginTypes } from '../../src/actions/loginAction';
import { mockState } from '../setup';


describe('Login Reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(mockState, {})).toEqual(mockState);
  });
  it('should return the initial state if it is not set', () => {
    expect(loginReducer(undefined, {})).toEqual({});
  });
  it('should return the correct state when loading', () => {
    const action = { type: loginTypes.loading, data: true };
    expect(loginReducer({}, action)).toEqual({ isBusy: true, message: [] });
  });
  it('should return the correct state on success', () => {
    const action = { type: loginTypes.success, data: { firstname: 'john' } };
    expect(loginReducer({}, action)).toEqual({ firstname: 'john', message: ['Login successful, redirecting...'], loginSuccess: true });
  });
  it('should return the correct state on failure', () => {
    const action = { type: loginTypes.failure, data: ['failed'] };
    expect(loginReducer({}, action)).toEqual({ message: ['failed'], loginSuccess: false, isBusy: false });
  });
});
