/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authAction';
import { scrollTop } from '../../utils/helpers';

/**
 * Logout component
 * @export
 * @class Logout
 * @extends {Component}
 */
class Logout extends Component {
  render() {
    const { logout: processLogout } = this.props;
    processLogout();
    scrollTop();
    return <Redirect to="/login" />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
