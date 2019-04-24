import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import Login from '../views/Login';
import * as selectors from '../../selectors/authSelectors';
import authenticate from '../../actions/authAction';
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
    payload.route = 'login';
    const { login: processLogin } = this.props;
    await processLogin(payload);
    scrollTop();
  }

  render() {
    const { isBusy, message, success } = this.props;
    if (success || isLoggedIn()) return <Redirect to="/dashboard" />;
    return (
      <Login
      handleSubmit={this.handleLogin}
      isBusy={isBusy} message={message}
      success={success}
      />
    );
  }
}
LoginContainer.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  message: PropTypes.array.isRequired,
  success: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    isBusy: selectors.getIsBusy,
    message: selectors.getMessage,
    success: selectors.getAuthSuccess,
  }
);

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(authenticate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
