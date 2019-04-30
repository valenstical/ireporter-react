import React, { Component } from 'react';
import { connect } from 'react-redux';
import formDataJSON from 'formdata-json';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { getUser, getReport } from '../../selectors';
import { scrollTop } from '../../utils/helpers';
import CreateReport from '../views/CreateReport';
import reportIncident from '../../actions/reportAction';


/**
 * Container component for the create report view
 * @export
 * @class CreateReport
 * @extends {Component}
 */
class CreateReportContainer extends Component {
  async componentDidMount() {
    const { location: { pathname } } = this.props;
    const pathAsArray = pathname.split('/');
    const reportType = pathAsArray[2];
    const reportId = pathAsArray[3];
    const { reportIncident: processReportIncident } = this.props;
    if (reportType && reportId) await processReportIncident({ route: `${reportType}/${reportId}`, method: 'get' });
    const { report } = this.props;
    const locatonAsArray = report.location.split(',');
    const [latitude, longitude] = locatonAsArray;
    report.latitude = latitude;
    report.longitude = longitude;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const payload = formDataJSON(new FormData(event.target));
    payload.route = `${payload.type}s`;
    payload.method = payload.id ? 'patch' : 'post';
    payload.location = `${payload.latitude},${payload.longitude}`;
    const { reportIncident: processReportIncident } = this.props;
    await processReportIncident(payload);
    scrollTop();
  }

  render() {
    const { user, report } = this.props;
    if (!user.isLoggedIn) return <Redirect to="/login" />;
    if (report.success) return <Redirect to="/dashboard" />;
    if (report.redirect) return <Redirect to="/404" />;

    return (
      <CreateReport
      handleSubmit={this.handleSubmit}
      report={report}
      />
    );
  }
}
CreateReportContainer.propTypes = {
  user: PropTypes.object.isRequired,
  report: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  reportIncident: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    user: getUser,
    report: getReport
  }
);

const mapDispatchToProps = dispatch => ({
  reportIncident: payload => dispatch(reportIncident(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReportContainer);
