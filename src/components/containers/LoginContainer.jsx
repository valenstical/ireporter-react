import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import Login from '../views/Login';
import * as selectors from '../../selectors/loginSelectors';
import login from '../../actions/loginAction';
import { scrollTop, isLoggedIn } from '../../utils/helpers';


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
    const { login: processLogin } = this.props;
    await processLogin(payload);
    scrollTop();
  }

  render() {
    const { isBusy, message, loginSuccess } = this.props;
    if (loginSuccess || isLoggedIn()) return <Redirect to="/dashboard" />;
    return (
      <Login
      handleSubmit={this.handleLogin}
      isBusy={isBusy} message={message}
      loginSuccess={loginSuccess}
      />
    );
  }
}
LoginContainer.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  message: PropTypes.array.isRequired,
  loginSuccess: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    isBusy: selectors.getIsBusy,
    message: selectors.getMessage,
    loginSuccess: selectors.getLoginSuccess,
  }
);

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
