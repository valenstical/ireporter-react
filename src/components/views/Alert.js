import React from 'react';
import PropTypes from 'prop-types';

/**
 * An alert component to be used to display context messages
 * @param {object} { success, title, message }
 * success - if the context of the message is success or error
 * title - the text to display in the title of the alert box
 * message - the text to display in the body of the alert box
 * @returns {object} The generated JSX object
 */
export default function Alert({ success, title, message }) {
  return (
    <div className={`alert${success ? ' alert-success' : ''}`}>
      <h4>{title}</h4>
      <ol className="unstyled-list">
        {message.map(value => <li key={value}>{value}</li>)}
      </ol>
    </div>


  );
}

Alert.propTypes = {
  success: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.array
};

Alert.defaultProps = {
  success: false,
  title: '',
  message: [],
};
