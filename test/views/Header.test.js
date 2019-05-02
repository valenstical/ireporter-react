import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/views/Header';

describe('<Header>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header user={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
