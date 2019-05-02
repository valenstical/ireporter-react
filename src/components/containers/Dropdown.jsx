/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-router-dom';

/**
 * Container component for the dropdown view
 * @export
 * @class DropdownContainer
 * @extends {Component}
 */
class Dropdown extends Component {
  state = {
    showDropdown: false,
  }

  handleClickOutside = () => {
    this.setState({
      showDropdown: false
    });
  };

  toggleDropdown = () => {
    const { toggleMenu } = this.props;
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown
    }));
    toggleMenu();
  }

  render() {
    const { user, showMenu } = this.props;
    const { showDropdown } = this.state;
    return (
      <ul className={`nav-section float-right nav-shown transition  ${showMenu ? '' : 'nav-hidden'}`} id="nav-section">
        <li
      className={`toggle toggle-pointer ${showDropdown ? 'shown' : ''}`}
       >
          <button type="button" className="nav-profile" data-toggle onClick={this.toggleDropdown}>
            <div className="nav-profile-img user-image" style={{ backgroundImage: `url(${user.profile})` }} />
            <span id="userFirstName">{user.firstname}</span>
            <span><i className="fa fa-chevron-down" /></span>
          </button>
          <ul className="toggle-menu toggle-menu-md" onClick={this.toggleDropdown}>
            <li>
              <Link to="/profile">
                <div className="toggle-profile">
                  <div className="nav-profile-img user-image" style={{ backgroundImage: `url(${user.profile})` }} />
                  <h4 id="userName">{`${user.firstname} ${user.lastname}`}</h4>
                  <p id="userEmail">{user.email}</p>
                </div>
              </Link>
            </li>
            <li className="toggle-line" />
            <li>
              <Link to="/dashboard">
                <i className="fa fa-file-text-o" />
              My reports
              </Link>
            </li>
            <li className="toggle-line" />
            <li>
              <Link to="/create-report">
                <i className="fa fa-plus-circle" />
              Create report
              </Link>
            </li>
            <li className="toggle-line" />
            <li>
              <Link to="/profile" className="transition">
                <i className="fa fa-user" />
              Edit profile
              </Link>
            </li>
            <li className="toggle-line" />
            <li>
              <Link className="transition" to="/logout">
                <i className="fa fa-power-off" />
              Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>

    );
  }
}


Dropdown.propTypes = {
  user: PropTypes.object.isRequired,
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,

};

export default onClickOutside(Dropdown);
