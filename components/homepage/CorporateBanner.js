import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LinkButton} from '../common/atoms/Button';
import {withTranslation} from 'react-i18next';

class CorporateBanner extends Component {
  render() {
    const {t} = this.props;
    return (
      <div className="corporate-banner">
        <div className="corporate-event">
          <div className="corporate-event-container">
            <div className="text-corporate-package-container">
              <p className="paragraph-text-corporate">{t('Increase your team efficiency')}</p>
              <br />
              <h1 className="text-header">{t('CORPORATE EVENTS')}</h1>
            </div>
            <p className="paragraph-list">
              {t('- Seminars and Conferences')} <br />
              {t('- Trade Shows')} <br />
              {t('- Appreciation Events')} <br />
              {t('- Team-Building Events')} <br />
              {t('- Product Launch events and even more')} <br />
            </p>
            <LinkButton className="button_contact" text={t('Show more')} withIcon={false} />
          </div>
        </div>
      </div>
    );
  }
}

CorporateBanner.propTypes = {};

CorporateBanner.defaultProps = {};

export default withTranslation()(connect((state) => state)(CorporateBanner));
