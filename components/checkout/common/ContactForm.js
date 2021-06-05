import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {appendSpreadsheet} from '../../../lib/sheets';
import Modal from '../../common/atoms/Modal';

const preferredAccommodation = [
  {code: '3star', name: '3*'},
  {code: '4star', name: '4*'},
  {code: '5star', name: '5*'},
];

// const showModal

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
      Accommodation: this.state.accommodation,
    };
    await appendSpreadsheet(newRow);
  }

  render() {
    const {withAccommodation} = this.props;
    return (
      <div className="contact-form-banner" id="contactForm">
        <div className="contact-section">
          <div className="contact-section-text">
            <p className="top-paragraph-contact">
              It doesn't end just here
              <br />
            </p>
            <h1 className="header-contact">CONTACT US</h1>
            <p className="down-paragraph-contact">
              Drop us a line about the ideas you have on your mind and we will make it happen.
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
                  placeholder="Your message"
                />
                {withAccommodation && (
                  <div className="contact-dropdown">
                    <p>
                      Preferred accommodation
                      <select
                        style={{
                          backgroundColor: '#150a28',
                          borderColor: 'transparent',
                          color: '#ef799b',
                          paddingLeft: '9vw',
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
                <div className="button-hero">
                  <button style={{paddingLeft: '3.5vw'}} className="button_contact" onClick={this.handleSubmit}>
                    Send
                  </button>
                </div>
                <Modal isOpen={this.state.openModal} onClose={this.handleClose} maxW="500px">
                  Thank you! We will reach you out ASAP
                </Modal>
                }
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
      </div>
    );
  }
}

ContactForm.propTypes = {
  withAccommodation: PropTypes.bool,
};
