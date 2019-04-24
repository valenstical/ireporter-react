import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../selectors';
import authenticate from '../../actions/authAction';
import { scrollTop } from '../../utils/helpers';
import Profile from '../views/Profile';


/**
 * Container component for the Profile view
 * @export
 * @class ProfileContainer
 * @extends {Component}
 */
class ProfileContainer extends Component {
  handleEditProfile = async (event) => {
    event.preventDefault();
    const payload = formDataJSON(new FormData(event.target));
    payload.route = `users/${payload.userId}/profile`;
    payload.method = 'patch';
    const { editProfile: processEditProfile } = this.props;
    await processEditProfile(payload);
    scrollTop();
  }

  handleChangePassword = async (event) => {
    event.preventDefault();
    const payload = formDataJSON(new FormData(event.target));
    payload.route = 'users/password';
    payload.method = 'patch';
    scrollTop();
  }

  render() {
    const { user } = this.props;
    if (!user.isLoggedIn) return <Redirect to="/login" />;
    return (
      <Profile
      handleEditProfile={this.handleEditProfile}
      handleChangePassword={this.handleChangePassword}
      user={user}
      />
    );
  }
}
ProfileContainer.propTypes = {
  user: PropTypes.object.isRequired,
  editProfile: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser
  }
);

const mapDispatchToProps = dispatch => ({
  editProfile: payload => dispatch(authenticate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
