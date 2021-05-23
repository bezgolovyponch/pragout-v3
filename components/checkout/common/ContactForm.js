import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../common/atoms/Checkbox';
import Dropdown from '../../common/atoms/Dropdown';
import {LinkButton} from '../../common/atoms/Button';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiveNewsletter: true,
      saveInfo: true,
    };

    this.toggleNewsletter = this.toggleNewsletter.bind(this);
  }

  toggleNewsletter() {
    this.setState({
      receiveNewsletter: !this.state.receiveNewsletter,
    });
  }

  render() {
    const {firstName, customerEmail, phoneNumber} = this.props;
    return (
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
              <input name="firstName" value={firstName} className="contact_text_field" placeholder="Name" />
              <input name="phoneNumber" className="contact_text_field" value={phoneNumber} placeholder="Phone number" />
              <input name="customer[email]" value={customerEmail} className="contact_text_field" placeholder="Email" />
              <LinkButton className="button_contact" text="Send" withIcon={false} />
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
  firstName: PropTypes.string,
  customerEmail: PropTypes.string,
  phoneNumber: PropTypes.string,
};
