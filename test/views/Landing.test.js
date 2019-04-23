import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../src/components/views/Landing';

describe('<Landing>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
