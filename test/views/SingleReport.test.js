import React from 'react';
import { shallow } from 'enzyme';
import SingleReport from '../../src/components/views/SingleReport';

const props = {
  handleUpdateStatus: jest.fn(),
  details: {
    data: [
      {
        status: 'draft',
        Videos: [],
        Images: [],
      },
    ]
  }
};

describe('<SingleReport>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SingleReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing with videos and images', () => {
    props.details.data[0].Videos = [{}];
    props.details.data[0].Images = [{}];

    const wrapper = shallow(<SingleReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    const wrapper = shallow(<SingleReport {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
