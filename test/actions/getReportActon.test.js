import fetchReports, { getReportTypes } from '../../src/actions/getReportAction';
import { createMockStore } from '../setup';
import request from '../../src/utils/request';

const mockStore = createMockStore();

jest.mock('../../src/utils/request');

describe('Get report action creators', () => {
  it('should return the correct value on successful request', () => {
    const expected = [
      {
        type: getReportTypes.loading,
        data: true,
      },
      {
        type: getReportTypes.success,
        data: []
      }
    ];
    request.mockResolvedValue({ data: { data: [] } });

    const store = mockStore();

    return store.dispatch(fetchReports()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value on failed request', () => {
    const expected = [
      {
        type: getReportTypes.loading,
        data: true,
      },
      {
        type: getReportTypes.failure,
        data: []
      }
    ];
    request.mockRejectedValue({ response: {} });

    const store = mockStore();

    return store.dispatch(fetchReports({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value for unknown error', () => {
    const expected = [
      {
        type: getReportTypes.loading,
        data: true,
      },
      {
        type: getReportTypes.failure,
        data: ['Please check your network connection']
      }
    ];
    request.mockRejectedValue({});

    const store = mockStore();

    return store.dispatch(fetchReports({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
