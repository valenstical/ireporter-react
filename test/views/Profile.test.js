import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../src/components/views/Profile';

describe('<Profile>', () => {
  it('should render without crashing on successful profile update', () => {
    const wrapper = shallow(
      <Profile
      user={{ isBusy: true, success: true, message: ['success'] }}
      handleEditProfile={jest.fn()}

    />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing on failed profile update', () => {
    const wrapper = shallow(
      <Profile
      user={{ isBusy: false, success: false, message: ['failed'] }}
      handleEditProfile={jest.fn()}
    />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
