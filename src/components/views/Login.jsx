import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadingIcon from '../../../public/images/resources/loader-light.gif';
import Alert from './Alert';

/**
 * The presentational component for the login page
 * @param {object} props An object containing the required properties of the component
 * @returns {object} The generated JSX object
 */
export default function Login({ user, handleSubmit }) {
  return (
    <section className="how login-wrapper bg-grey top-space" data-pg-name="How it Works">
      <div className="wrapper" data-pg-name="Wrapper">
        <form className="card login-form" noValidate onSubmit={handleSubmit}>
          <header className="form-header">
            <h1 className="text-brand">Welcome Back</h1>
            <p>Sign in to start reporting...</p>
          </header>
          {user.message.length > 0 && <Alert message={user.message} title={user.success ? 'Login Successful!' : 'Login Failed!'} success={user.success} />}
          <div className="form-wrapper">
            <label htmlFor="username">Username, Email or Phone number</label>
            <input className="form-element" type="text" name="username" required id="username" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="forgotPassword">Password</label>
            <Link to="#" className="forgot-password transition">Forgot Password?</Link>
            <input className="form-element" type="password" name="password" required id="forgotPassword" autoComplete="off" />
          </div>
          <button className="btn-brand btn-submit" type="submit" disabled={user.isBusy}>
            <span>Sign In </span>
            { user.isBusy && <img src={loadingIcon} width="12" alt="loading" />}
          </button>
        </form>
        <p className="login-register-link">
New to iReporter?
          {' '}
          <Link to="/sign-up">Register here</Link>
        </p>
      </div>
    </section>


  );
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
