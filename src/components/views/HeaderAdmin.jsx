
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/**
 * The admin header component
 * @returns {object} The generated JSX object
 */
function HeaderAdmin({ showMenu, toggleMenu }) {
  return (
    <nav className="navigation">
      <div className="wrapper">
        <div className="clear-float">
          <Link to="/" className="nav-brand text-brand float-left">iReporter</Link>
          <ul className={`nav-section float-right nav-shown ${showMenu ? '' : 'nav-hidden'} transition`} id="nav-section">
            <li data-pg-name="Nav Item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li data-pg-name="Nav Item">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>

          <button className="menu-bar" type="button" onClick={toggleMenu}>
            <i className="fa fa-align-justify" />
          </button>
        </div>
      </div>
    </nav>
  );
}

HeaderAdmin.propTypes = {
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired
};

HeaderAdmin.defaultProps = {
  showMenu: false
};

export default HeaderAdmin;
