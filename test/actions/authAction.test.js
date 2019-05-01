import authenticate, { authTypes } from '../../src/actions/authAction';
import { createMockStore } from '../setup';
import request from '../../src/utils/request';

const mockStore = createMockStore();

jest.mock('../../src/utils/request');

describe('Auth Action creators', () => {
  it('should return the correct value on successful authentication', () => {
    const response = { token: '', user: { firstname: 'john' } };
    const expected = [
      {
        type: authTypes.loading,
        data: true,
      },
      {
        type: authTypes.success,
        data: { token: '', firstname: 'john' }
      }
    ];
    request.mockResolvedValue({ data: { data: [response] } });

    const store = mockStore();

    return store.dispatch(authenticate({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value on failed authentication', () => {
    const expected = [
      {
        type: authTypes.loading,
        data: true,
      },
      {
        type: authTypes.failure,
        data: ['failed']
      }
    ];
    request.mockRejectedValue({ response: { data: { error: ['failed'] } } });

    const store = mockStore();

    return store.dispatch(authenticate({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value for unknown error', () => {
    const expected = [
      {
        type: authTypes.loading,
        data: true,
      },
      {
        type: authTypes.failure,
        data: ['Please check your network connection']
      }
    ];
    request.mockRejectedValue({});

    const store = mockStore();

    return store.dispatch(authenticate({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
