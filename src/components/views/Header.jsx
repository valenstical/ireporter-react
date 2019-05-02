
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Dropdown from '../containers/Dropdown';

/**
 * The header component
 * @returns {object} The generated JSX object
 */
function Header({ user, showMenu, toggleMenu }) {
  return (
    <nav className="navigation">
      <div className="wrapper">
        <div className="clear-float">
          <Link to="/" className="nav-brand text-brand float-left">iReporter</Link>
          {!user.isLoggedIn ? (
            <ul className={`nav-section float-right nav-shown ${showMenu ? '' : 'nav-hidden'} transition`} id="nav-section">
              <li data-pg-name="Nav Item">
                <Link to="/">Home</Link>
              </li>
              <li data-pg-name="Nav Item">
                <Link to="/login">Sign in</Link>
              </li>
              <li data-pg-name="Nav Item" className="btn-cta">
                <Link to="/sign-up" className="btn-brand transition">Report a case</Link>
              </li>
            </ul>
          )
            : <Dropdown user={user} showMenu={showMenu} toggleMenu={toggleMenu} />
          }
          <button className="menu-bar" type="button" onClick={toggleMenu}>
            <i className="fa fa-align-justify" />
          </button>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired
};

Header.defaultProps = {
  showMenu: false
};

export default (Header);
