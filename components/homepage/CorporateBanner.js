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
          <div className="text-corporate-package-container">
            <p className="top-text-ladies">Increase your team efficiency</p>
            <h1 className="text-header">CORPORATE EVENTS</h1>
            <p className="paragraph-text">
              - Seminars and Conferences - Trade Shows - Appreciation Events - Team-Building Events - Product Launch
              Events and even more
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
