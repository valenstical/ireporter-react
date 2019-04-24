import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The header component
 * @returns {object} The generated JSX object
 */
export default function Header() {
  return (
    <nav className="navigation">
      <div className="wrapper">
        <div className="clear-float">
          <Link to="/" className="nav-brand text-brand float-left">iReporter</Link>
          <ul className="nav-section float-right nav-shown nav-hidden transition" id="nav-section">
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
          <button className="menu-bar" type="button">
            <i className="fa fa-align-justify" />
          </button>
        </div>
      </div>
    </nav>
  );
}
