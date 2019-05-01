import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import formDataJSON from 'formdata-json';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { getUser, getReport } from '../../selectors';
import EditReport from '../views/EditReport';
import fetchReports from '../../actions/getReportAction';
import updateReport from '../../actions/updateReportAction';

/**
 * Container component for the EditReport view
 * @export
 * @class EditReortContainer
 * @extends {Component}
 */
class EditReportContainer extends Component {
  componentDidMount() {
    const { location: { pathname } } = this.props;
    const pathAsArray = pathname.split('/');
    const reportType = pathAsArray[2];
    const reportId = pathAsArray[3];
    const { fetchReports: processfetchReports } = this.props;
    if (reportType && reportId) processfetchReports(`${reportType}/${reportId}`);
  }

  handleUpdateReport = (event) => {
    event.preventDefault();
    const payload = formDataJSON(new FormData(event.target));
    const { updateReport: processUpdateReport } = this.props;
    processUpdateReport(payload);
  }

  render() {
    const { user, report } = this.props;
    if (!user.isLoggedIn) return <Redirect to="/login" />;
    if (report.redirect) return <Redirect to="/404" />;
    return (
      report.data.length > 0
        ? (
          <EditReport
      report={report}
      handleUpdateReport={this.handleUpdateReport}
      />
        )
        : null
    );
  }
}

EditReportContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditReportContainer);
