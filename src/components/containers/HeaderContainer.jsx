/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Header from '../views/Header';

/**
 * Container component for the Header view
 * @export
 * @class HeaderContainer
 * @extends {Component}
 */
class HeaderContainer extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default HeaderContainer;
