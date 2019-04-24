import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/views/Login';

describe('<Login>', () => {
  it('should render without crashing on startup', () => {
    const wrapper = shallow(<Login
      message={[]}
      isBusy={false}
      success={false}
      handleSubmit={jest.fn()}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when login failed', () => {
    const wrapper = shallow(<Login message={['failed']} isBusy={false} success={false} handleSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when login is successful', () => {
    const wrapper = shallow(<Login message={['successful']} isBusy success handleSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});