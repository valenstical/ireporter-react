/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ago from 'date-fns/distance_in_words_strict';
import DateFormat from 'date-fns/format';


const getStatus = {
  draft: { icon: 'file-text-o', class: 'draft' },
  resolved: { icon: 'check', class: 'resolved' },
  rejected: { icon: 'remove', class: 'rejected' },
  'under investigation': { icon: 'info-circle', class: 'investigating' },
};
/**
 * The single report component
 * @returns {object} The generated JSX object
 */
export default function SingleReport({ report, handleUpdateStatus, isAdmin }) {
  const status = getStatus[report.status];
  return (
    <section className="login-wrapper top-space account-wrapper">
      <section className="heading">
        <div className="wrapper">
          <div className="bread">
            <Link to="/login">Home</Link>
            <i className="fa fa-angle-right" />
            <a className="active">{report.title}</a>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <header className="page-title" />
          <div className="reports-column">
            {isAdmin && (
            <div className="text-right" style={{ marginBottom: 20 }}>
              <select name="status" className="form-element" onChange={handleUpdateStatus} defaultValue={report.status}>
                <option value="draft" disabled>Draft</option>
                <option value="under investigation">Investigating</option>
                <option value="resolved">Resolved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            )}
            <div className="report-item card card-sm">
              <div className="profile-img">
                <div className="profile-img-reports" style={{ backgroundImage: `url(${report.profile})` }} />
              </div>
              <div className="report-item-content">
                <h5>{report.firstname}</h5>
                <span className="report-item-date">
                  <i className="fa fa-calendar" />
                  {' '}
                  {`${DateFormat(report.createdOn, 'MMM Do YYYY h:mm a')} (${ago(report.createdOn, new Date())} ago)`}
                </span>
                <span className={`badge-citizen badge-status status-badge-${status.class}`}>
                  <i className={`fa fa-${status.icon}`} />
                  {status.class}
                </span>
                <h6>
                  {report.title}
                  <i className={`fa flag ${report.type === 'red-flag' ? 'fa-flag flag-red-flag' : 'fa-bullhorn flag-intervention'}`} title={report.type} />
                </h6>
                <p>{report.comment}</p>
                <iframe className="map" allowFullScreen src={`https://maps.google.com/maps?q=${report.location}&output=embed&hl=en;z=20`} title={report.location} />
                {report.Videos.map(video => <video src={`${process.env.ROOT}/${video}`} controls preload="metadata" style={{ height: 364 }} key={video} />)}
                {report.Images.map(image => <img src={`${process.env.ROOT}/${image}`} alt={report.title} key={image} />)}
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>


  );
}

SingleReport.propTypes = {
  report: PropTypes.object.isRequired,
  handleUpdateStatus: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
};

SingleReport.defaultProps = {
  isAdmin: false,
};
