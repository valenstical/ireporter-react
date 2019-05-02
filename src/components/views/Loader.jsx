import React from 'react';
import busyIcon from '../../../public/images/resources/loader2.svg';

/**
 * The Loader component that acts as indicator during api requests
 * @returns {object} The generated JSX object
 */
export default function Loader() {
  return (
    <div className="overlay-fetching">
      <img src={busyIcon} alt="busy icon" />
    </div>

  );
}
