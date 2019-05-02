import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SummaryBox from './SummaryBox';
import Loader from './Loader';
import TableRow from './TableRow';

/**
 * The admin dashboard component
 * @returns {object} The generated JSX object
 */
export default function AdminDashboard({
  summary, reports
}) {
  const { data } = reports;
  return (
    <main className={`login-wrapper top-space account-wrapper relative bg-grey ${reports.isBusy && 'busy'}`}>
      {/* Pills and Tabs */}
      <section className="heading">
        <div className="wrapper">
          <div>
            <Link to="#">
              Reports (
              {data.length}
              )
            </Link>
          </div>
        </div>
      </section>

      {/* Actual content */}
      <section className="profile-page fill-viewport">
        <div className="wrapper">
          <SummaryBox summary={summary} />

          {/* Table */}
          <div className="card card-sm table-overflow">
            <div className="table-wrapper">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Report</th>
                    <th>User</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody id="reportsBody">
                  {data.map(report => <TableRow report={report} key={report.id} />)}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </section>

      <Loader />
    </main>

  );
}

AdminDashboard.propTypes = {
  reports: PropTypes.object.isRequired,
  summary: PropTypes.object.isRequired
};

AdminDashboard.defaultProps = {
};
