import React from 'react';
import setup, { mockState } from '../setup';
import UserDashboardContainer from '../../src/components/containers/UserDashboardContainer';


describe('<UserDashboardContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<UserDashboardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when user is logged in', () => {
    mockState.user.isLoggedIn = true;
    const wrapper = setup(<UserDashboardContainer />, mockState);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when with data', () => {
    mockState.reports.data = [{
      status: 'draft'
    }];
    const wrapper = setup(<UserDashboardContainer />, mockState);
    expect(wrapper).toMatchSnapshot();
  });
});
