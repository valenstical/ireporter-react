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
export default function Login({
  isBusy, message, handleSubmit, loginSuccess
}) {
  return (
    <section className="how login-wrapper bg-grey top-space" data-pg-name="How it Works">
      <div className="wrapper" data-pg-name="Wrapper">
        <form className="card login-form" noValidate onSubmit={handleSubmit}>
          <header className="form-header">
            <h1 className="text-brand">Welcome Back</h1>
            <p>Sign in to start reporting...</p>
          </header>
          {message.length > 0 && <Alert message={message} title={loginSuccess ? '' : 'Login Failed!'} success={loginSuccess} />}
          <div className="form-wrapper">
            <label htmlFor="username">Username, Email or Phone number</label>
            <input className="form-element" type="text" name="username" required id="username" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="forgotPassword">Password</label>
            <Link to="#" className="forgot-password transition">Forgot Password?</Link>
            <input className="form-element" type="password" name="password" required id="forgotPassword" autoComplete="off" />
          </div>
          <button className="btn-brand btn-submit" type="submit" disabled={isBusy}>
            <span>Sign In </span>
            { isBusy && <img src={loadingIcon} width="12" alt="loading" />}
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
  isBusy: PropTypes.bool.isRequired,
  message: PropTypes.array.isRequired,
  loginSuccess: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
