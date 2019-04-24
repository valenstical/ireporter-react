import React from 'react';
import setup from '../setup';
import LoginContainer from '../../src/components/containers/LoginContainer';


describe('<LoginContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<LoginContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
