import { scrollTop } from '../../src/utils/helpers';

window.scrollTo = jest.fn();


describe('Scroll Top function', () => {
  it('should execute window.scrollTo function', () => {
    scrollTop();
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
