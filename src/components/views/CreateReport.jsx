import React from 'react';
import PropTypes from 'prop-types';
import loadingIcon from '../../../public/images/resources/loader-light.gif';
import Alert from './Alert';

/**
 * The create report component
 * @returns {object} The generated JSX object
 */
export default function CreateReport({ handleSubmit, report }) {
  return (
    <section className="login-wrapper top-space account-wrapper" data-pg-name="Dashboard">
      <section className="heading">
        <div className="wrapper" data-pg-name="Wrapper">
          <div className="max-width-800">
            <div className="bread">
              <h1>Report an Incident</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper" data-pg-name="Wrapper">
        <form onSubmit={handleSubmit} noValidate className="max-width-800">
          {report.message.length > 0 && <Alert message={report.message} title={report.success ? 'Report Successful!' : 'Oops!'} success={report.success} />}
          <div className="report-item card card-sm create-report-details">
            <div className="form-wrapper">
              <label htmlFor="title">Title </label>
              <small className="text-helper">(e.g Power outage for over 3 weeks around Aba market)</small>
              <input id="title" className="form-element" type="text" name="title" required defaultValue={report.title} />
            </div>
            <div className="form-wrapper no-margin-btm">
              <label htmlFor="comments">
Comment
              </label>
              <small className="text-helper">(Write full details here)</small>
              <textarea id="comments" className="form-element" name="comment" required defaultValue={report.comment} />
            </div>
          </div>
          <div className="report-item card card-sm create-report-details padding-zero-btm">
            <h2 className="report-box-title">Report Type</h2>
            <p>
Is this incident linked to corruption or
              just an issue that needs government intervention ?

            </p>
            <div className="row" data-pg-name="Row">
              <div className="column column-md-6" data-pg-name="Column">
                <div className="report-item report-box card no-margin-btm" title="Red Flag Report">
                  <h4>
Corruption case
                    {' '}
                    <i className="fa fa-flag flag" title="Red Flag Report" />
                  </h4>
                  <p>e.g. bribery, extortion, money laundering, e.t.c</p>
                  <input type="radio" name="type" defaultValue="red-flag" data-pg-hidden className="radio-fine" defaultChecked />
                  <div className="pg-empty-placeholder radio-mark" />
                </div>
              </div>
              <div className="column column-md-6" data-pg-name="Column">
                <div className="report-item report-box card" title="Intervention Report">
                  <h4>
Intervention Case
                    {' '}
                    <i className="fa flag fa-bullhorn flag-intervention" title="Intervention Report" />
                  </h4>
                  <p>e.g. bad road, collapsed bridge, flooding, e.t.c</p>
                  <input type="radio" name="type" defaultValue="intervention" className="radio-fine" data-pg-hidden defaultChecked={report.type === 'intervention'} />
                  <div className="pg-empty-placeholder radio-mark" />
                </div>
              </div>
            </div>
          </div>
          <div className="report-item card card-sm max-width-800 create-report-details padding-zero-btm">
            <header className="header-create">
              <h2 className="report-box-title">Location</h2>
              <p>
Where did this happen? Enter the the complete location of the incident
              </p>
            </header>
            <div className="row" data-pg-name="Row">
              <div className="column" data-pg-name="column-md-6">
                <div className="form-wrapper">
                  <input id="location" defaultValue={report.state} className="form-element" type="text" name="state" required />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrapper">
            <button disabled={report.isBusy} className="btn-brand btn-250 btn-submit" type="submit">
              <span>Submit Report</span>
              { report.isBusy && <img src={loadingIcon} width="12" alt="loading" />}
            </button>
          </div>
        </form>
      </div>
    </section>

  );
}

CreateReport.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  report: PropTypes.object.isRequired
};
