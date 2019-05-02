/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import Header from '../views/Header';
import { getUser } from '../../selectors';
import HeaderAdmin from '../views/HeaderAdmin';
/**
 * Container component for the header view
 * @export
 * @class HeaderContainer
 * @extends {Component}
 */
class HeaderContainer extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const { user } = this.props;
    const { showMenu } = this.state;
    return (
      user.isAdmin
        ? (
          <HeaderAdmin
      showMenu={showMenu}
      toggleMenu={this.toggleMenu}
      />
        )
        : (
          <Header
        user={user}
        showMenu={showMenu}
        toggleMenu={this.toggleMenu}
      />
        )
    );
  }
}

const mapStateToProps = createStructuredSelector(
  { user: getUser }
);

HeaderContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(HeaderContainer);
