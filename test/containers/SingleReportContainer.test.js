import React from 'react';
import setup from '../setup';
import SingleReportContainer from '../../src/components/containers/SingleReportContainer';


describe('<SingleReportContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(<SingleReportContainer location={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
