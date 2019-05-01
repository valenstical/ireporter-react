import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/components/views/Button';

describe('<Button>', () => {
  it('should render without crashing when not active', () => {
    const wrapper = shallow(<Button isBusy={false} text="Submit" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when active', () => {
    const wrapper = shallow(<Button isBusy text="Submit" />);
    expect(wrapper).toMatchSnapshot();
  });
});
