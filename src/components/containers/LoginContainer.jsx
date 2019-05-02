import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import Login from '../views/Login';
import { getUser } from '../../selectors';
import authenticate from '../../actions/authAction';
import { scrollTop } from '../../utils/helpers';


/**
 * Container component for the Login view
 * @export
 * @class LoginContainer
 * @extends {Component}
 */
class LoginContainer extends Component {
  handleLogin = async (event) => {
    event.preventDefault();
    const payload = formDataJSON(new FormData(event.target));
    payload.route = 'auth/login';
    payload.method = 'post';
    const { login: processLogin } = this.props;
    await processLogin(payload);
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
      <Login
      handleSubmit={this.handleLogin}
      user={user}
      />
    );
  }
}
LoginContainer.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser,
  }
);

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(authenticate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
