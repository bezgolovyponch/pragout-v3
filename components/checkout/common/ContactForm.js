import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {appendSpreadsheet} from '../../../lib/sheets';
import Modal from '../../common/atoms/Modal';
import {Button} from '../../common/atoms/Button';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import moment from 'moment';


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
  async handleSubmit(event) {
    event.preventDefault();
    if (!this.state.gdpr) {
      alert('You need to accept terms and conditions first!');
    }
    if (!this.state.customerEmail || !this.state.phoneNumber) {
      alert('Please fulfill your email or phone number with country code!');
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
                  placeholder="Number of persons"
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
                <div className="button-hero-contact">
                  <Button className="button_contact" onClick={this.handleSubmit} text={t('Send')} withIcon={false} />
                </div>
                <Modal isOpen={this.state.openModal} onClose={this.handleClose} maxW="500px">
                  Thank you! We will reach you out as soon as possible
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="cont_img_light">
          <img src="images/ContactsLight-01.svg" className="light" />
        </div>
        <div className="cont_img_mid">
          <img src="images/ContactLow-01-01.svg" className="mid" />
        </div>
        <div className="cont_img_high">
          <img src="images/ContactHigh-01-01.svg" className="high" />
        </div>
        <img src="images/Mainbg_light-01.svg" className="image-21" />
      </div>
    );
  }
}

ContactForm.propTypes = {
  withAccommodation: PropTypes.bool,
  onMainPage: PropTypes.bool,
};

export default withTranslation()(connect((state) => state)(ContactForm));
