import React from 'react';
import PropTypes from 'prop-types';
import loadingIcon from '../../../public/images/resources/loader-light.gif';

/**
 * Reusable button component
 * @returns {object} The generated JSX object
 */
export default function Button({ isBusy, text, route }) {
  return (
    <div className="btn-wrapper">
      <button className="btn-brand btn-submit" type="submit">
        <span>{ text }</span>
        { isBusy && <img src={loadingIcon} width="12" alt="loading" />}
      </button>
      <input type="hidden" name="route" defaultValue={route} />
    </div>

  );
}

Button.propTypes = {
  isBusy: PropTypes.bool,
  text: PropTypes.string,
  route: PropTypes.string,
};
Button.defaultProps = {
  route: '',
  isBusy: false,
  text: ''
};
