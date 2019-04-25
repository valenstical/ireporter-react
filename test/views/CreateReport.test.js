import React from 'react';
import { shallow } from 'enzyme';
import CreateReport from '../../src/components/views/CreateReport';

describe('<CreateReport>', () => {
  it('should render without crashing for red-flag report', () => {
    const wrapper = shallow(<CreateReport
handleSubmit={jest.fn()} report={{
  message: [],
  success: false,
  isBusy: false,
  type: 'red-flag'
}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for intervention report', () => {
    const wrapper = shallow(<CreateReport
handleSubmit={jest.fn()} report={{
  message: [],
  success: false,
  isBusy: false,
  type: 'intervention'
}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for successful report', () => {
    const wrapper = shallow(<CreateReport
handleSubmit={jest.fn()} report={{
  message: ['successful'],
  success: true,
  isBusy: false,
  type: 'intervention'
}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for failed report', () => {
    const wrapper = shallow(<CreateReport
handleSubmit={jest.fn()} report={{
  message: ['failed'],
  success: false,
  isBusy: true,
  type: 'red-flag'
}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
