import React from 'react';
import setup from '../setup';
import AdminDashboardContainer from '../../src/components/containers/AdminDashboardContainer';


describe('<AdminDashboardContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<AdminDashboardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
