import '@babel/polyfill';
import reportIncident, { createReportTypes, createReportAction } from '../../src/actions/reportAction';
import { createMockStore } from '../setup';
import request from '../../src/utils/request';

const mockStore = createMockStore();

jest.mock('../../src/utils/request');

describe('Create report Action creators', () => {
  it('should return an object of the create article action types', () => {
    const expected = {
      type: createReportTypes.loading,
      data: true,
    };
    expect(createReportAction(createReportTypes.loading, true)).toEqual(expected);
  });
  it('should return the correct value on successful create report request', () => {
    const response = { message: 'successful' };
    const expected = [
      {
        type: createReportTypes.loading,
        data: true,
      },
      {
        type: createReportTypes.success,
        data: 'successful'
      }
    ];
    request.mockResolvedValue({ data: { data: [response] } });

    const store = mockStore();

    return store.dispatch(reportIncident({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value on failed create report request', () => {
    const expected = [
      {
        type: createReportTypes.loading,
        data: true,
      },
      {
        type: createReportTypes.failure,
        data: ['failed']
      }
    ];
    request.mockRejectedValue({ response: { data: { error: ['failed'] } } });

    const store = mockStore();

    return store.dispatch(reportIncident({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should return the correct value for unknown error', () => {
    const expected = [
      {
        type: createReportTypes.loading,
        data: true,
      },
      {
        type: createReportTypes.failure,
        data: ['Please check your network connection']
      }
    ];
    request.mockRejectedValue({});

    const store = mockStore();

    return store.dispatch(reportIncident({})).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
