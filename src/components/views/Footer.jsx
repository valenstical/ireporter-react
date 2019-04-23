import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <p className="float-right">
          <Link to="#">Terms &amp; Conditions</Link>
          <Link to="#">Privacy Policy</Link>
        </p>
        <p className="float-left">&copy; 2019 iReporter.</p>
      </div>
    </footer>

  );
}
