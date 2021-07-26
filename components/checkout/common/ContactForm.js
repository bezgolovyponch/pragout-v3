import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {appendSpreadsheet} from '../../../lib/sheets';
import Modal from '../../common/atoms/Modal';
import {Button} from '../../common/atoms/Button';

const preferredAccommodation = [
  {code: '1', name: '1'},
  {code: '2', name: '2'},
  {code: '3', name: '3'},
  {code: '4', name: '4'},
  {code: '5', name: '5'},
  {code: '6', name: '6'},
  {code: '7', name: '7'},
  {code: '8', name: '8'},
  {code: '9', name: '9'},
  {code: '10', name: '11'},
];

export default class ContactForm extends Component {
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
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleClose() {
    this.setState({openModal: false});
  }
  async handleSubmit(event) {
    this.setState({
      openModal: true,
    });
    event.preventDefault();
    const newRow = {
      Name: this.state.fullName,
      CustomerEmail: this.state.customerEmail,
      PhoneNumber: this.state.phoneNumber,
      ContactNotes: this.state.contactNotes,
      NumberOfPersons: this.state.numberOfPersons,
    };
    await appendSpreadsheet(newRow);
  }

  render() {
    const {withAccommodation, onMainPage} = this.props;
    return (
      <div className="contact-form-banner" id="contactForm">
        <div className="contact-section">
          <div className="contact-section-text">
            <p className="top-paragraph-contact">
              {onMainPage ? 'It does not end just here' : 'Is that what you need?'}

              <br />
            </p>
            <h1 className="header-contact"> {onMainPage ? 'CONTACT US' : 'Enquire now'} </h1>
            <p className="down-paragraph-contact">
              {onMainPage
                ? 'Drop us a line about the ideas you have on your mind and we will make it happen'
                : 'Or drop us a line about the ideas you have on your mind and we will make it happen'}
              .
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
                  placeholder="Name"
                />
                <input
                  name="phoneNumber"
                  className="contact_text_field"
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  placeholder="Phone number"
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
                  placeholder="Your ideas"
                />
                <input
                  name="numberOfPersons"
                  type="text"
                  value={this.state.numberOfPersons}
                  onChange={this.handleChange}
                  className="contact_text_field"
                  placeholder=" Number of persons"
                />
                {withAccommodation && (
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
                )}
                {/*                <p>
                  I agree with terms and conditions
                  <input
                    name="gdpr"
                    type="checkbox"
                    placeholder="I agree with terms and conditions"
                    checked={this.state.gdpr}
                    onChange={this.handleChange}
                  />
                </p>*/}
                <div className="button-hero-contact">
                  <Button className="button_contact" onClick={this.handleSubmit} text="Send" withIcon={false} />
                </div>
                <Modal isOpen={this.state.openModal} onClose={this.handleClose} maxW="500px">
                  Thank you! We will reach you out ASAP
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
