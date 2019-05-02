import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../../../public/images/resources/no-report.png';

/**
 * The empty dashboard component
 * @returns {object} The generated JSX object
 */
export default function EmptyDashboard({ reportType }) {
  return (
    <div className="empty-result text-center">
      <img src={image} width={350} alt="no reports" />
      <h4>
You don't have any
        {' '}
        {' '}
        <strong>{reportType}</strong>
        {' '}
reports yet.
      </h4>
      <Link className="btn-brand" to="/create-report">
    Get Started Now
        <i className="fa fa-chevron-right fa-pull-right" />
      </Link>
    </div>
  );
}

EmptyDashboard.propTypes = {
  reportType: PropTypes.string
};


EmptyDashboard.defaultProps = {
  reportType: ''
};
