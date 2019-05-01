import React from 'react';
import setup from '../setup';
import EditReportContainer from '../../src/components/containers/EditReportContainer';

const location = {
  pathname: '/path/type/1'
};

describe('<EditReportContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<EditReportContainer location={location} />);
    expect(wrapper).toMatchSnapshot();
  });
});
