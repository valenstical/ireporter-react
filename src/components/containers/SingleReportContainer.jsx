import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { getUser, getReport } from '../../selectors';
import fetchReports from '../../actions/getReportAction';
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

  async componentDidMount() {
    const { location: { pathname } } = this.props;
    const pathAsArray = pathname.split('/');
    const reportType = pathAsArray[2];
    const reportId = pathAsArray[3];
    const { fetchReports: processfetchReports } = this.props;
    if (reportType && reportId) await processfetchReports(`${reportType}/${reportId}`);
    this.populateReport();
  }

  handleUpdateStatus = async (event) => {
    const status = event.target.value;
    const { updateReport: processUpdateReport } = this.props;
    const { report: { data } } = this.state;

    const payload = {
      route: `${data[0].type}s/${data[0].id}/status`,
      status
    };
    await processUpdateReport(payload);
    this.setState({
      refresh: true
    });
  }

  populateReport = () => {
    const { report } = this.props;
    this.setState({
      report
    });
  }

  render() {
    const { user } = this.props;
    const { report, refresh } = this.state;
    if (!user.isLoggedIn) return <Redirect to="/login" />;
    if (report.redirect) return <Redirect to="/404" />;
    if (refresh) return <Redirect to="/login" />;
    return (
      report.data
        ? (
          <SingleReport
          details={report}
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
  report: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  fetchReports: PropTypes.func.isRequired,
  updateReport: PropTypes.func.isRequired,

};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser,
    report: getReport
  }
);

const mapDispatchToProps = dispatch => ({
  fetchReports: route => dispatch(fetchReports(route)),
  updateReport: payload => dispatch(updateReport(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleReportContainer);
