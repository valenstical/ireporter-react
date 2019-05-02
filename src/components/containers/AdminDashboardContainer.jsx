import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser, getReports, getSummary } from '../../selectors';
import fetchReports from '../../actions/getReportAction';
import AdminDashboard from '../views/AdminDashboard';

/**
 * Container component for the AdminDashboard view
 * @export
 * @class AdminDashboardContainer
 * @extends {Component}
 */
class AdminDashboardContainer extends Component {
  componentDidMount() {
    this.handleGetReports();
  }

  handleGetReports = () => {
    const { fetchReports: processFetchReports } = this.props;
    processFetchReports();
  }

  render() {
    const { reports, summary, user } = this.props;
    if (!user.isLoggedIn || !user.isAdmin) return <Redirect to="/login" />;
    return (
      reports.data
        ? (
          <AdminDashboard
          reports={reports}
          summary={summary}
          active={reports.active}
          handleGetReports={this.handleGetReports}
         />
        )
        : null
    );
  }
}

AdminDashboardContainer.propTypes = {
  user: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  summary: PropTypes.object.isRequired,
  fetchReports: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser,
    reports: getReports,
    summary: getSummary
  }
);

const mapDispatchToProps = dispatch => ({
  fetchReports: () => dispatch(fetchReports('incidents/admin', true, 'incidents')),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardContainer);
