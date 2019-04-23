import React from 'react';
import setup from '../setup';
import HeaderContainer from '../../src/components/containers/HeaderContainer';


describe('<EditProfileContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<HeaderContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
