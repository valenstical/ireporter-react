import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <div>
        <section className="hero top-space" data-pg-collapsed data-pg-name="Hero">
          <div className="wrapper" data-pg-name="Wrapper">
            <div className="hero-inner" data-pg-collapsed>
              <h1>
Report cases of
                {' '}
                <span>corruption</span>
              </h1>
              <p>
Easily report cases of corruption and issues that need government attention.
                  We would help spread the word &amp; report it to the appropriate authorities.

              </p>
              <div className="btn-wrapper">
                <Link to="/sign-up" className="btn-brand">Report a case</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="how" data-pg-collapsed data-pg-name="How it Works">
          <div className="wrapper" data-pg-name="Wrapper">
            <header className="header" data-pg-collapsed>
              <small className="round-info">How it Works</small>
              <h2><span className="text-upper">make your voice count</span></h2>
              <p className="p-lg">
Corruption is a huge bane to Africa’s development.
              African countries must develop novel and localised solutions that
              will curb this menace, hence the birth of iReporter.
              </p>
              <p className="p-lg">
              iReporter enables any/every citizen to bring any form of corruption to
              the notice of appropriate authorities and the general public.
              Users can also report on things that needs government intervention?

              </p>
              <p className="p-lg">
              Users can also report on things that needs government intervention?

              </p>
            </header>
            <div className="row" data-pg-name="Row">
              <div className="column column-md-4" data-pg-name="Column" data-pg-collapsed>
                <div className="how-item transition card">
                  <i className="fa fa-bullhorn transition" />
                  <h3>Report it</h3>
                  <p>
Simply fill out a report form by entering details about the incident.
                      You may choose to stay anonymous.

                  </p>
                </div>
              </div>
              <div className="column column-md-4" data-pg-name="Column" data-pg-collapsed>
                <div className="how-item transition card">
                  <i className="fa fa-thumbs-o-up transition" />
                  <h3>Get Feedback</h3>
                  <p>
We would investigate &amp; submit your report to the appropriate authorities,
                      giving you feedback each step of the way.

                  </p>
                </div>
              </div>
              <div className="column column-md-4" data-pg-name="Column" data-pg-collapsed>
                <div className="how-item transition card">
                  <i className="fa fa-share-alt transition" />
                  <h3>Share Report</h3>
                  <p>
You may share your report on social media to help spread the word
                      and stop similar cases from occuring.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-pg-name="Newsletter" className="reports-wrapper padding-lg bg-grey" data-pg-collapsed>
          <div className="wrapper" data-pg-name="Wrapper">
            <div className="newsletter-box">
              <h2 className="text-brand">Stay Connected</h2>
              <p>
Get latest complaints on corruption and other issues directly in your inbox.
                  Stay connected, together we can make Nigeria corruption FREE.

              </p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="text-brand" type="button">
                  <i className="fa fa-send" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}
