import React from 'react';
import setup from '../setup';
import CreateReportContainer from '../../src/components/containers/CreateReportContainer';


describe('<CreateReportContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<CreateReportContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
