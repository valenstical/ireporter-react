import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { getUser, getReports } from '../../selectors';
import SingleReport from '../views/SingleReport';
import updateReport from '../../actions/updateReportAction';

/**
 * Container component for the single report view
 * @export
 * @class EditReortContainer
 * @extends {Component}
 */
class SingleReportContainer extends Component {
  state = {
    report: {},
    refresh: false,
  }

  componentDidMount() {
    const { location: { pathname }, reports } = this.props;
    const pathAsArray = pathname.split('/');
    const reportId = pathAsArray[3];
    const report = reports.data.find(item => item.id.toString() === reportId.toString());
    this.populateReport(report);
  }

  handleUpdateStatus = async (event) => {
    const status = event.target.value;
    const { updateReport: processUpdateReport } = this.props;
    const { report } = this.state;

    const payload = {
      route: `${report.type}s/${report.id}/status`,
      status
    };
    await processUpdateReport(payload);
    this.setState({
      refresh: true
    });
  }

  populateReport = (report) => {
    this.setState({
      report
    });
  }

  render() {
    const { user } = this.props;
    const { report, refresh } = this.state;
    if (!user.isLoggedIn) return <Redirect to="/login" />;
    if (!report) return <Redirect to="/404" />;
    if (refresh) return <Redirect to="/login" />;
    return (
      report.status
        ? (
          <SingleReport
          report={report}
          handleUpdateStatus={this.handleUpdateStatus}
          isAdmin={user.isAdmin}
          />
        )
        : null
    );
  }
}

SingleReportContainer.propTypes = {
  user: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  updateReport: PropTypes.func.isRequired,

};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser,
    reports: getReports
  }
);

const mapDispatchToProps = dispatch => ({
  updateReport: payload => dispatch(updateReport(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleReportContainer);
