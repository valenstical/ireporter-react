import React from 'react';
import { shallow } from 'enzyme';
import SummaryBox from '../../src/components/views/SummaryBox';

describe('<SummaryBox>', () => {
  it('should render without crashing when not active', () => {
    const wrapper = shallow(<SummaryBox summary={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
