import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../src/components/views/TableRow';

const report = {
  status: 'draft',
  type: 'red-flag'
};

describe('<TableRow>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<TableRow report={report} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for intervention reports', () => {
    report.type = 'intervention';
    const wrapper = shallow(<TableRow report={report} />);
    expect(wrapper).toMatchSnapshot();
  });
});
