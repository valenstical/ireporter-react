import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../selectors';
import { scrollTop } from '../../utils/helpers';
import Signup from '../views/Signup';
import authenticate from '../../actions/authAction';

/**
 * Container component for the Singup view
 * @export
 * @class SignupContainer
 * @extends {Component}
 */
class SignupContainer extends Component {
  handleSignup = async (event) => {
    event.preventDefault();
    const payload = formDataJSON(new FormData(event.target));
    payload.route = 'auth/signup';
    payload.method = 'post';
    const { signup: processSignup } = this.props;
    await processSignup(payload);
    scrollTop();
  }

  render() {
    const { user } = this.props;
    if (user.isLoggedIn && !user.isAdmin) {
      return <Redirect to="/dashboard" />;
    }
    if (user.isLoggedIn && user.isAdmin) {
      return <Redirect to="/admin" />;
    }
    return (
      <Signup
      handleSubmit={this.handleSignup}
      user={user}
      />
    );
  }
}
SignupContainer.propTypes = {
  user: PropTypes.object.isRequired,
  signup: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser
  }
);

const mapDispatchToProps = dispatch => ({
  signup: payload => dispatch(authenticate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
