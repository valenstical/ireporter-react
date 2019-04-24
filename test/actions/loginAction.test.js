import '@babel/polyfill';
import login, { loginTypes, loginAction } from '../../src/actions/loginAction';
import { createMockStore } from '../setup';
import request from '../../src/utils/request';

const mockStore = createMockStore();

jest.mock('../../src/utils/request');

describe('Login Action creators', () => {
  it('should return an object of the login action types', () => {
    const expected = {
      type: loginTypes.loading,
      data: true,
    };
    expect(loginAction(loginTypes.loading, true)).toEqual(expected);
  });
  it('should return the correct value on successful login', () => {
    const response = { token: '', user: { firstname: 'john' } };
    const expected = [
      {
        type: loginTypes.loading,
        data: true,
      },
      {
        type: loginTypes.success,
        data: { token: '', firstname: 'john' }
      }
    ];
    request.mockResolvedValue({ data: { data: [response] } });

    const store = mockStore();

    return store.dispatch(login({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value on failed login', () => {
    const expected = [
      {
        type: loginTypes.loading,
        data: true,
      },
      {
        type: loginTypes.failure,
        data: ['failed']
      }
    ];
    request.mockRejectedValue({ response: { data: { error: ['failed'] } } });

    const store = mockStore();

    return store.dispatch(login({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value for unknown error', () => {
    const expected = [
      {
        type: loginTypes.loading,
        data: true,
      },
      {
        type: loginTypes.failure,
        data: ['Please check your network connection']
      }
    ];
    request.mockRejectedValue({});

    const store = mockStore();

    return store.dispatch(login({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
