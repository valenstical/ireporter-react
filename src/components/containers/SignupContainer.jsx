import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import * as selectors from '../../selectors/authSelectors';
import { scrollTop, isLoggedIn } from '../../utils/helpers';
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
    payload.route = 'signup';
    const { signup: processSignup } = this.props;
    await processSignup(payload);
    scrollTop();
  }

  render() {
    const { isBusy, message, success } = this.props;
    if (success || isLoggedIn()) return <Redirect to="/dashboard" />;
    return (
      <Signup
      handleSubmit={this.handleSignup}
      isBusy={isBusy}
      message={message}
      success={success}
      />
    );
  }
}
SignupContainer.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  message: PropTypes.array.isRequired,
  success: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    isBusy: selectors.getIsBusy,
    message: selectors.getMessage,
    success: selectors.getAuthSuccess,
  }
);

const mapDispatchToProps = dispatch => ({
  signup: payload => dispatch(authenticate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
