import React from 'react';
import { shallow } from 'enzyme';
import EditReport from '../../src/components/views/EditReport';

const props = {
  report: {
    data: [],
  },
  handleUpdateReport: jest.fn(),
};

describe('<EditReport>', () => {
  it('should render without crashing for empty data', () => {
    const wrapper = shallow(<EditReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing with data', () => {
    props.report.data = [{ location: '' }];
    const wrapper = shallow(<EditReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
