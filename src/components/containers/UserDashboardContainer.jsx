import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser, getReports, getSummary } from '../../selectors';
import fetchReports from '../../actions/getReportAction';

import UserDashboard from '../views/UserDashboard';

/**
 * Container component for the UserDashboard view
 * @export
 * @class HeaderContainer
 * @extends {Component}
 */
class UserDashboardContainer extends Component {
  componentDidMount() {
    this.handleGetReports();
  }

  handleGetReports = (event) => {
    const type = event ? event.target.value : '';
    const { fetchReports: processFetchReports } = this.props;
    processFetchReports(`${type}s`, type);
  }

  render() {
    const { reports, summary, user } = this.props;
    if (!user.isLoggedIn) return <Redirect to="/login" />;
    return (
      reports.data
        ? (
          <UserDashboard
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

UserDashboardContainer.propTypes = {
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
  fetchReports: (route, type) => dispatch(fetchReports(route, true, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardContainer);
