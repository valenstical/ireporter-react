import React from 'react';
import { Link } from 'react-router-dom';
import ago from 'date-fns/distance_in_words_strict';
import DateFormat from 'date-fns/format';
import PropTypes from 'prop-types';

const getStatus = {
  draft: { icon: 'file-text-o', class: 'draft' },
  resolved: { icon: 'check', class: 'resolved' },
  rejected: { icon: 'remove', class: 'rejected' },
  'under investigation': { icon: 'info-circle', class: 'investigating' },
};


/**
 * The table row component
 * @returns {object} The generated JSX object
 */
export default function TableRow({ report }) {
  const status = getStatus[report.status];
  return (
    <tr>
      <td className="td-small" title={DateFormat(report.createdOn, 'MMM Do, YYYY h:mm a')}>
        {DateFormat(report.createdOn, 'MMM Do, YYYY')}
        <br />
        <small>
(
          {`${ago(report.createdOn, new Date())} ago`}
)
        </small>
      </td>
      <td>
        <i className={`fa flag ${report.type === 'red-flag' ? 'fa-flag flag-red-flag' : 'fa-bullhorn flag-intervention'}`} title={report.type} />
        <Link to={`/reports/${report.type}s/${report.id}`}><ins>{report.title}</ins></Link>
      </td>
      <td className="relative">
        <div className="profile-img">
          <div className="profile-img-reports" style={{ backgroundImage: `url(${report.profile})` }} />
        </div>
        {' '}
        <span className="profile-name text-capitalize">{report.firstname}</span>
      </td>
      <td className="text-center">
        <span className={`badge-citizen badge-status status-badge-${status.class}`}>
          <i className={`fa fa-${status.icon}`} />
          {status.class}
        </span>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  report: PropTypes.object.isRequired,
};
