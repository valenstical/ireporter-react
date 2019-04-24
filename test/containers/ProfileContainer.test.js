import React from 'react';
import setup from '../setup';
import ProfileContainer from '../../src/components/containers/ProfileContainer';


describe('<ProfileContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<ProfileContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
