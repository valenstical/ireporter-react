import React from 'react';
import setup from '../setup';
import SignupContainer from '../../src/components/containers/SignupContainer';


describe('<SignupContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<SignupContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
