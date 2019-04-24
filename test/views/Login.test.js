import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/views/Login';

const user = {
  isBusy: false,
  success: false,
  message: [],
};

describe('<Login>', () => {
  it('should render without crashing on startup', () => {
    const wrapper = shallow(<Login
      user={user}
      handleSubmit={jest.fn()}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when login failed', () => {
    const wrapper = shallow(<Login user={{ isBusy: false, success: false, message: ['failed'] }} handleSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when login is successful', () => {
    const wrapper = shallow(<Login user={{ isBusy: true, success: true, message: ['success'] }} handleSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
