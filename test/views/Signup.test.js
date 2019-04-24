import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../src/components/views/Signup';

describe('<Signup>', () => {
  it('should render without crashing on startup', () => {
    const wrapper = shallow(<Signup
      message={[]}
      isBusy={false}
      success={false}
      handleSubmit={jest.fn()}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when login failed', () => {
    const wrapper = shallow(<Signup message={['failed']} isBusy={false} success={false} handleSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when login is successful', () => {
    const wrapper = shallow(<Signup message={['successful']} isBusy success handleSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
