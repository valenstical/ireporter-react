import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loadingIcon from '../../../public/images/resources/loader-light.gif';
import Alert from './Alert';

/**
 * The Signup component
 * @returns {object} The generated JSX object
 */
export default function Signup({
  isBusy, message, handleSubmit, success
}) {
  return (
    <section className="login-wrapper bg-grey top-space" data-pg-name="How it Works">
      <form className="wrapper" data-pg-name="Wrapper" onSubmit={handleSubmit} noValidate>
        <div className="card login-form login-form-lg">
          <h1 className="text-brand">WELCOME TO iREPORTER</h1>
          <p>
Let's help you quickly report cases of corruption and issues that
need government attention to the appropriate authorities.
            <span> Register by filling out the form below to get started.</span>
          </p>
          <small className="form-instructions">* All fields are required</small>
          {message.length > 0 && <Alert message={message} title={success ? '' : 'Sign up Failed!'} success={success} />}

          <div className="form-wrapper">
            <label htmlFor="firstname">First Name </label>
            <input className="form-element" type="text" name="firstname" required id="firstname" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="lastname">Last Name </label>
            <input className="form-element" type="text" name="lastname" required id="lastname" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="othernames">
Other Names
              <small>(optional)</small>
            </label>
            <input className="form-element" type="text" required name="othernames" id="othernames" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="phone">Phone Number </label>
            <input className="form-element" type="tel" name="phoneNumber" required id="phone" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="email">Email Address </label>
            <input className="form-element" type="email" name="email" required id="email" />
          </div>
        </div>
        <div className="card login-form login-form-lg">
          <div className="form-wrapper">
            <label htmlFor="username">Choose a Username </label>
            <input className="form-element" type="text" name="username" required id="username" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="password">Create a Password</label>
            <input className="form-element" type="password" name="password" required id="password" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" required id="termsCheckedBox" />
          I agree to the
              <Link to="#" className="forgot-password">Terms and Conditions</Link>
            </label>
          </div>
          <button className="btn-brand btn-submit" type="submit">
            <span>Register Now</span>
            { isBusy && <img src={loadingIcon} width="12" alt="loading" />}
          </button>
        </div>
        <p className="login-register-link login-form-lg">
Already registered?
          {' '}
          <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>

  );
}

Signup.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  message: PropTypes.array.isRequired,
  success: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
