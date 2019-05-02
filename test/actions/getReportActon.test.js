import fetchReports, { getReportTypes, getReportsTypes } from '../../src/actions/getReportAction';
import { createMockStore, mockState } from '../setup';
import request from '../../src/utils/request';

const mockStore = createMockStore();

jest.mock('../../src/utils/request');

describe('Get report action creators', () => {
  it('should return the correct value on successful request', () => {
    const expected = [
      {
        type: getReportTypes.loading,
        data: null,
      },
      {
        type: getReportTypes.success,
        data: []
      }
    ];
    request.mockResolvedValue({ data: { data: [] } });

    const store = mockStore(mockState);

    return store.dispatch(fetchReports('')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value on failed request', () => {
    const expected = [
      {
        type: getReportTypes.loading,
        data: null,
      },
      {
        type: getReportTypes.failure,
        data: []
      }
    ];
    request.mockRejectedValue({ response: {} });

    const store = mockStore(mockState);

    return store.dispatch(fetchReports('')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value for unknown error', () => {
    const expected = [
      {
        type: getReportTypes.loading,
        data: null,
      },
      {
        type: getReportTypes.failure,
        data: ['Please check your network connection']
      }
    ];
    request.mockRejectedValue({});

    const store = mockStore(mockState);

    return store.dispatch(fetchReports('')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});

describe('Get reports action creators', () => {
  it('should return the correct value on successful request', () => {
    const expected = [
      {
        type: getReportsTypes.loading,
        data: '',
      },
      {
        type: getReportsTypes.success,
        data: []
      }
    ];
    request.mockResolvedValue({ data: { data: [] } });

    const store = mockStore(mockState);

    return store.dispatch(fetchReports('', true, '')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value on failed request', () => {
    const expected = [
      {
        type: getReportsTypes.loading,
        data: 'red-flag',
      },
      {
        type: getReportsTypes.failure,
        data: []
      }
    ];
    request.mockRejectedValue({ response: {} });

    const store = mockStore(mockState);

    return store.dispatch(fetchReports('', true, 'red-flag')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value for unknown error', () => {
    const expected = [
      {
        type: getReportsTypes.loading,
        data: 'intervention',
      },
      {
        type: getReportsTypes.failure,
        data: ['Please check your network connection']
      }
    ];
    request.mockRejectedValue({});

    const store = mockStore(mockState);

    return store.dispatch(fetchReports('', true, 'intervention')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
