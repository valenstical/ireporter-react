import React from 'react';
import PropTypes from 'prop-types';

/**
 * The summary box component
 * @returns {object} The generated JSX object
 */
export default function SummaryBox({ summary }) {
  return (
    <header className="page-title">
      <div className="row" data-pg-name="Row">
        <div className="column column-xs-3" data-pg-name="Column" data-pg-collapsed>
          <div className="card card-sm summary">
            <i className="fa fa-file-text-o bg-status-draft" />
            <p>
              <small id="pending">{summary.pending}</small>
              <span>Pending</span>
            </p>
          </div>
        </div>
        <div className="column column-xs-3" data-pg-name="Column" data-pg-collapsed>
          <div className="card card-sm summary">
            <i className="fa bg-status-resolved fa-check" />
            <p>
              <small id="resolved">{summary.resolved}</small>
              <span>Resolved</span>
            </p>
          </div>
        </div>
        <div className="column column-xs-3" data-pg-name="Column" data-pg-collapsed>
          <div className="card card-sm summary">
            <i className="fa bg-status-rejected fa-remove" />
            <p>
              <small id="rejected">{summary.rejected}</small>
              <span>Rejected</span>
            </p>
          </div>
        </div>
        <div className="column column-xs-3" data-pg-name="Column" data-pg-collapsed>
          <div className="card card-sm summary">
            <i className="fa bg-status-pending fa-info" />
            <p>
              <small id="investigating">{summary.investigating}</small>
              <span title="Investigating">Investigating</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

SummaryBox.propTypes = {
  summary: PropTypes.object.isRequired
};
