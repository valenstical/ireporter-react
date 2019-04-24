import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadingIcon from '../../../public/images/resources/loader-light.gif';
import Alert from './Alert';

/**
 * The edit profile component
 * @returns {object} The generated JSX object
 */
export default function Profile({ handleEditProfile, user }) {
  return (
    <main className="login-wrapper top-space" data-pg-name="Dashboard">
      <section className="heading">
        <div className="wrapper" data-pg-name="Wrapper">
          <div className="bread">
            <Link to="/dashboard">Home</Link>
            <i className="fa fa-angle-right" />
            <a className="active">Edit Profile</a>
          </div>
        </div>
      </section>
      <section className="edit-profile-wrapper">
        <div className="wrapper" data-pg-name="Wrapper">
          <div className="row">
            <div className="column column-md-8">
              <form className="card" onSubmit={handleEditProfile} noValidate>
                {user.message.length > 0 && <Alert message={user.success ? ['Your profile has was updated successfully.'] : user.message} title={user.success ? 'Profile Updated!' : 'Something went wrong!'} success={user.success} />}
                <div className="form-wrapper">
                  <label htmlFor="firstname">First Name </label>
                  <input className="form-element text-capitalize" type="text" name="firstname" required id="firstname" defaultValue={user.firstname} />
                </div>
                <div className="form-wrapper">
                  <label htmlFor="lastname">Last Name </label>
                  <input id="lastname" className="form-element text-capitalize" type="text" name="lastname" required defaultValue={user.lastname} />
                </div>
                <div className="form-wrapper">
                  <label htmlFor="othername">Other Name</label>
                  <input id="othername" className="form-element text-capitalize" type="text" name="othernames" defaultValue={user.othernames} />
                </div>
                <div className="form-wrapper">
                  <label htmlFor="email">Email </label>
                  <input id="email" className="form-element" type="email" name="email" required defaultValue={user.email} />
                </div>
                <div className="form-wrapper">
                  <label htmlFor="phone">Phone Number </label>
                  <input id="phone" className="form-element" type="tel" name="phoneNumber" required defaultValue={user.phoneNumber} />
                </div>
                <div className="form-wrapper">
                  <label htmlFor="username">Username </label>
                  <input id="username" className="form-element" type="text" name="username" required defaultValue={user.username} />
                </div>
                <button className="btn-brand btn-250 btn-submit" type="submit" disabled={user.isBusy}>
                  <span>Update Profile</span>
                  { user.isBusy && <img src={loadingIcon} width="12" alt="loading" />}
                </button>
                <input type="hidden" name="userId" value={user.id} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Profile.propTypes = {
  handleEditProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
