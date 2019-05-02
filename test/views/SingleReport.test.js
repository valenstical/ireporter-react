import React from 'react';
import { shallow } from 'enzyme';
import SingleReport from '../../src/components/views/SingleReport';

const props = {
  handleUpdateStatus: jest.fn(),
  report: {

    status: 'draft',
    Videos: [],
    Images: [],

  }
};

describe('<SingleReport>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SingleReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing with videos and images', () => {
    props.report.Videos = [{}];
    props.report.Images = [{}];

    const wrapper = shallow(<SingleReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    const wrapper = shallow(<SingleReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
