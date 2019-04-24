import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/views/Alert';

describe('<Alert>', () => {
  it('should render without crashing for default context', () => {
    const wrapper = shallow(<Alert success={false} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for successful context', () => {
    const wrapper = shallow(<Alert success />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for empty message', () => {
    const wrapper = shallow(<Alert message={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing for non empty message', () => {
    const wrapper = shallow(<Alert message={['hello', 'hi']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
