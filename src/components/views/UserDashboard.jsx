import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmptyDashboard from './EmptyDashboard';
import SummaryBox from './SummaryBox';
import ReportCard from './ReportCard';
import Loader from './Loader';
/**
 * The user dashboard component
 * @returns {object} The generated JSX object
 */
export default function UserDashboard({
  summary, reports, active, handleGetReports
}) {
  const { data } = reports;
  return (
    <main className={`login-wrapper top-space account-wrapper relative bg-grey ${reports.isBusy && 'busy'}`}>
      {/* Pills and Tabs */}
      <section className="tab-pane heading">
        <div className="wrapper">
          <div className="tab">
            <button type="button" value="" onClick={handleGetReports} className={`tranistion ${active === '' && 'active'}`}>All</button>
            <button value="red-flag" type="button" onClick={handleGetReports} className={`tranistion ${active === 'red-flag' && 'active'}`}>Red Flags</button>
            <button value="intervention" type="button" onClick={handleGetReports} className={`tranistion ${active === 'intervention' && 'active'}`}>Interventions</button>
          </div>
        </div>
      </section>
      <section className="profile-page fill-viewport">
        <div className="wrapper">
          {data.length === 0
            ? <EmptyDashboard />
            : (
              <>
                <SummaryBox summary={summary} />
                <section className="reports-wrapper">
                  <header className="header">
                    <small className="round-info">{`Found ${data.length} ${active} reports`}</small>
                  </header>
                  <div id="results">
                    {data.map(report => <ReportCard report={report} key={report.id} />)}
                  </div>
                </section>

              </>
            )}

        </div>
      </section>
      {/* Create Report Link */}
      <Link
to="/create-report" className="btn-brand btn-floating"
title="Create a new report">
        <i className="fa fa-plus transition" />
      </Link>
      <Loader />
    </main>

  );
}

UserDashboard.propTypes = {
  reports: PropTypes.object.isRequired,
  active: PropTypes.string,
  handleGetReports: PropTypes.func.isRequired,
  summary: PropTypes.object.isRequired
};

UserDashboard.defaultProps = {
  active: '',
};
