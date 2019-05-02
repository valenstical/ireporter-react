import React from 'react';
import { shallow } from 'enzyme';
import AdminDashboard from '../../src/components/views/AdminDashboard';

const props = {
  reports: {
    data: [{
      id: 1
    }]
  },
  summary: {}
};

describe('<AdminDashboard>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AdminDashboard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when busy', () => {
    props.reports.isBusy = true;
    const wrapper = shallow(<AdminDashboard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
