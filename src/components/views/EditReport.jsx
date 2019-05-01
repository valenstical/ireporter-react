/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Button from './Button';


/**
 * The footer component
 * @returns {object} The generated JSX object
 */
export default function EditReport({ report, handleUpdateReport }) {
  const { data } = report;
  const value = data.length === 0 ? { location: '' } : data[0];
  const locatonAsArray = value.location.split(',');
  const [latitude, longitude] = locatonAsArray;
  return (
    <main className="login-wrapper top-space account-wrapper">
      <section className="heading">
        <div className="wrapper">
          <div className="bread">
            <h1>
              <Link to="/dashboard" className="link-back"><i className="fa fa-arrow-left" /></Link>
              Edit Report
            </h1>
          </div>
        </div>
      </section>
      <div className="wrapper" data-pg-name="Wrapper">
        <div className="max-width-800 indicator text-center" />

        {/* Report Type */}
        <div className="report-item card card-sm create-report-details padding-zero-btm">
          <h2 className="report-box-title">Report Type</h2>
          <p>
            Is this incident linked to corruption or just an
            issue that needs government intervention ?
          </p>
          <div className="row" data-pg-name="Row">
            <div className="column column-md-6" data-pg-name="Column">
              <div className="report-item max-width-800 report-box card no-margin-btm disabled" title="Red Flag Report">
                <h4>
Corruption case
                  {' '}
                  <i className="fa fa-flag flag" title="Red Flag Report" />
                </h4>
                <p>e.g. bribery, extortion, money laundering, e.t.c</p>
                <input type="radio" name="type" defaultValue="red-flag" className="radio-fine" disabled defaultChecked={value.type === 'red-flag'} />
                <div className="pg-empty-placeholder radio-mark" />
              </div>
            </div>
            <div className="column column-md-6" data-pg-name="Column">
              <div className="report-item max-width-800 report-box card disabled" title="Intervention Report">
                <h4>
Intervention Case
                  {' '}
                  <i className="fa flag fa-bullhorn flag-intervention" title="Intervention Report" />
                </h4>
                <p>e.g. bad road, collapsed bridge, flooding, e.t.c</p>
                <input type="radio" name="type" defaultValue="intervention" disabled className="radio-fine" defaultChecked={value.type === 'intervention'} />
                <div className="pg-empty-placeholder radio-mark" />
              </div>
            </div>
          </div>
        </div>

        {/* Update Title and Comment */}
        <form className="report-item card card-sm create-report-details" noValidate id="commentBox" onSubmit={handleUpdateReport}>
          <div className="form-wrapper">
            <label htmlFor="title">Title </label>
            <input className="form-element" type="text" name="title" required id="title" defaultValue={value.title} />
          </div>
          <div className="form-wrapper no-margin-btm">
            <label htmlFor="comment">Comment</label>
            <textarea className="form-element" name="comment" required defaultValue={value.comment} id="comment" />
          </div>
          <Button text="Save changes" isBusy={report.isBusy} route={`${value.type}s/${value.id}/comment`} />
        </form>

        {/* Update Location */}
        <form className="report-item card card-sm create-report-details" noValidate onSubmit={handleUpdateReport}>
          <header className="header-create">
            <h2 className="report-box-title">Location</h2>
            <p>
Where did this happen? Enter the latitude/longitude. You can use
              {' '}
              <Link to="https://maps.google.com" target="_blank"><strong><ins>Google Map</ins></strong></Link>
              {' '}
for help.
            </p>
            <p className="hidden">Where did this happen? Enter the latitude/longitude or simply use the marker to choose a location from the map</p>
          </header>
          <div className="row" data-pg-name="Row">
            <div className="column-md-6 column column-xs-6" data-pg-name="column-md-6">
              <div className="form-wrapper">
                <label htmlFor="lat">Latitude</label>
                <input className="form-element" type="text" name="latitude" required id="lat" defaultValue={latitude} />
              </div>
            </div>
            <div className="column-md-6 column column-xs-6" data-pg-name="column-md-6">
              <div className="form-wrapper">
                <label htmlFor="long">Longitude</label>
                <input className="form-element" type="text" name="longitude" required id="long" defaultValue={longitude} />
              </div>
            </div>
          </div>
          <Button text="Save changes" isBusy={report.isBusy} route={`${value.type}s/${value.id}/location`} />
        </form>

        {/* Done Button */}
        <div className="btn-wrapper">
          <Link className="btn-brand btn-submit btn-secondary btn-250" to="/dashboard">Done</Link>
        </div>

      </div>

    </main>

  );
}
EditReport.propTypes = {
  report: PropTypes.object.isRequired,
  handleUpdateReport: PropTypes.func.isRequired,
};
