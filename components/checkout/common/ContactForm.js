import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {appendSpreadsheet} from '../../../lib/sheets';
import Modal from '../../common/atoms/Modal';
import {Button} from '../../common/atoms/Button';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import moment from 'moment';
import TagManager from 'react-gtm-module'
import commerce from '../../../lib/commerce';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      customerEmail: '',
      phoneNumber: '',
      contactNotes: '',
      accommodation: '',
      showOptions: false,
      openModal: false,
      gdpr: true,
      numberOfPersons: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleClose() {
    this.setState({openModal: false});
  }
  async handleSubmit() {
    if (!this.state.gdpr) {
      alert('You must accept the privacy policy!');
    }
    if (!this.state.customerEmail || !this.state.phoneNumber) {
      alert('Please enter your e-mail address or telephone number with country code!');
    }
    if (this.state.customerEmail && this.state.phoneNumber && this.state.gdpr) {
      this.setState({
        openModal: true,
      });
      const newRow = {
        Name: this.state.fullName,
        Email: this.state.customerEmail,
        Phone: this.state.phoneNumber,
        Notes: this.state.contactNotes,
        NumberOfPersons: this.state.numberOfPersons,
        DateCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      await appendSpreadsheet(newRow);

      TagManager.dataLayer({
        dataLayer: {
          event: 'sendContactForm',
        }
      });
    }
  }
  render() {
    const {withAccommodation, onMainPage,t} = this.props;
    const name = t('Name');
    const ideas = t('Your ideas');
    return (
      <div className="contact-form-banner" id="contactForm">
        <div className="contact-section">
          <div className="contact-section-text">
            <p className="top-paragraph-contact">
              { onMainPage ? t('It does not end just here') :  t('Is that what you need?')
              }
              <br />
            </p>
            <h1 className="header-contact"> {onMainPage ? t('CONTACT US'): t('Enquire now')} </h1>
            <p className="down-paragraph-contact">
              {onMainPage
                ? t('Drop us a line about the ideas you have on your mind and we will make it happen')
                : t('Or drop us a line about the ideas you have on your mind and we will make it happen')}.
            </p>
          </div>
          <div className="contact-form">
            <div className="contact-fields-form">
              <div className="input-fields-form">
                <input
                  name="fullName"
                  type="text"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                  className="contact_text_field"
                  placeholder={name}
                />
                <input
                  name="phoneNumber"
                  className="contact_text_field"
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  placeholder= {t('Phone number')}
                />
                <input
                  name="customerEmail"
                  type="text"
                  value={this.state.customerEmail}
                  onChange={this.handleChange}
                  className="contact_text_field"
                  placeholder="Email"
                />
                <input
                  name="contactNotes"
                  type="text"
                  value={this.state.contactNotes}
                  onChange={this.handleChange}
                  className="contact_text_field"
                  placeholder={ideas}
                />
                <input
                  name="numberOfPersons"
                  type="text"
                  value={this.state.numberOfPersons}
                  onChange={this.handleChange}
                  className="contact_text_field"
                  placeholder={t('Group size')}
                />
{/*                {withAccommodation && (
                  <div className="contact-dropdown">
                    <p>
                      Accommodation
                      <select
                        style={{
                          backgroundColor: '#150a28',
                          borderColor: 'transparent',
                          color: '#ef799b',
                          paddingLeft: '12vw',
                        }}
                        value={this.state.accommodation}
                        name="accommodation"
                        onClick={() => this.setState({showOptions: true})}
                        onChange={this.handleChange}>
                        {this.state.showOptions &&
                          preferredAccommodation.map((accommodation) => (
                            <option value={accommodation.code} key={accommodation.code}>
                              {accommodation.name}
                            </option>
                          ))}
                      </select>
                    </p>
                  </div>
                )}*/}
                <div className="gdpr-checkbox">
                  <input
                    className="gdpr"
                    name="gdpr"
                    type="checkbox"
                    checked={this.state.gdpr}
                    onChange={this.handleChange} />
                  <p className="gdpr-text">{t('I agree to')}</p>
                  <Link href="/privacy-policy">
                    <a>
                      <p>{t('Privacy Policy')}</p>
                    </a>
                  </Link>
                </div>
               
                </div>
                <div className="button-hero-contact">
                  <Button className="button_contact" onClick={this.handleSubmit} text={t('Send')} withIcon={false} />
                <Modal isOpen={this.state.openModal} onClose={this.handleClose} maxW="500px">
                  {t('Thank you! The tour manager will be in touch with you shortly!')}
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="cont_img_light">
          <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6032f2ee143e8e0e5ecc8fb1_ContactsLight-01.svg" className="light" />
        </div>
        <div className="cont_img_mid">
          <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6033dbea3ede913f40c57b52_ContactLow-01-01.svg" className="mid" />
        </div>
        <div className="cont_img_high">
          <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6033dbe99bcc203480fc400e_ContactHigh-01-01.svg" className="high" />
        </div>
        <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602d53867ad04e8d2dac1aeb_Mainbg_light-01.svg" className="image-21" />
      </div>
    );
  }
}

ContactForm.propTypes = {
  withAccommodation: PropTypes.bool,
  onMainPage: PropTypes.bool,
};

export default withTranslation()(connect((state) => state)(ContactForm));
