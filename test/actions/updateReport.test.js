import { toast } from 'react-toastify';
import { createMockStore, mockState } from '../setup';
import request from '../../src/utils/request';
import updateReport from '../../src/actions/updateReportAction';

const mockStore = createMockStore();

jest.mock('../../src/utils/request');
jest.mock('react-toastify');

describe('Update report action creators', () => {
  it('should show a toast with success message on succssful request', () => {
    request.mockResolvedValue({ data: { data: [{ message: 'successful' }] } });
    toast.success.mockImplementation(() => {});
    const store = mockStore(mockState);

    return store.dispatch(updateReport({})).then(() => {
      expect(toast.success).toHaveBeenCalled();
    });
  });
  it('should show a toast with error message on failed request', () => {
    request.mockRejectedValue({ response: { data: { error: [] } } });
    toast.error.mockImplementation(() => {});
    const store = mockStore(mockState);

    return store.dispatch(updateReport({})).then(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
  it('should show a toast with error message on unknown error', () => {
    request.mockRejectedValue({ });
    toast.error.mockImplementation(() => {});
    const store = mockStore(mockState);
    return store.dispatch(updateReport({})).then(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
