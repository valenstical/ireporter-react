import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ago from 'date-fns/distance_in_words_strict';


const getStatus = {
  draft: { icon: 'file-text-o', class: 'draft' },
  resolved: { icon: 'check', class: 'resolved' },
  rejected: { icon: 'remove', class: 'rejected' },
  'under investigation': { icon: 'info-circle', class: 'investigating' },
};
/**
 * The report card component
 * @returns {object} The generated JSX object
 */
export default function ReportCard({ report }) {
  const status = getStatus[report.status];
  return (
    <div className="reports-column">
      <div className="report-item card card-sm">
        <div className="profile-img">
          <div className="profile-img-reports" style={{ backgroundImage: `url(${report.profile})` }} />
        </div>
        <div className="report-item-content">
          <h5>{report.firstname}</h5>
          <span className="report-item-date">
            <i className="fa fa-calendar" />
            {' '}
            {`${ago(report.createdOn, new Date())} ago`}
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
          <Link className="report-item-link" to={`/reports/${report.type}s/${report.id}`}>
            Details
            {' '}
            &gt;&gt;
          </Link>
          {' '}
          <Link className="btn-brand btn-secondary" to={`/edit-report/${report.type}s/${report.id}`}>
            Edit
            {' '}
            <i className="fa fa-edit" />
          </Link>

        </div>
      </div>
    </div>
  );
}

ReportCard.propTypes = {
  report: PropTypes.object.isRequired,
};
