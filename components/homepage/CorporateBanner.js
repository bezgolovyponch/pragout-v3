import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {connect} from 'react-redux';
import {LinkButton} from '../common/atoms/Button';

class CorporateBanner extends Component {
  render() {
    return (
      <div className="corporate-banner">
        <div className="corporate-event">
          <div className="corporate-event-container">
            <div className="text-corporate-package-container">
              <p className="paragraph-text-corporate">Increase your team efficiency</p>
              <br />
              <h1 className="text-header">CORPORATE EVENTS</h1>
            </div>
            <p className="paragraph-list">
              - Seminars and Conferences <br />
              - Trade Shows <br />
              - Appreciation Events <br />
              - Team-Building Events <br />
              - Product Launch events and even more <br />
            </p>
            <LinkButton className="button_contact" text="Show more" withIcon={false} />
          </div>
        </div>
      </div>
    );
  }
}

CorporateBanner.propTypes = {};

CorporateBanner.defaultProps = {};

export default connect((state) => state)(CorporateBanner);
