import React, {Component} from 'react';
import PropTypes from 'prop-types';

const preferredAccommodation = [
  {code: '3star', name: '3*'},
  {code: '4star', name: '4*'},
  {code: '5star', name: '5*'},
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    /*this.exploreContainer = React.createRef();*/
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

  async handleSubmit(event) {
    alert(' was submitted: ' + this.state.fullName + this.state.customerEmail + this.state.accommodation);
    event.preventDefault();
  }

  render() {
    const {withAccommodation} = this.props;
    return (
      <div className="contact-form-banner">
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
                    <p className="">Preffered accomodation</p>
                    <img
                      alt="Downward symbol indicating opening of a dropdown"
                      src="/icon/arrow-bottom.svg"
                      className="w-20"
                    />
                    <select value={this.state.accommodation} name="accommodation" onChange={this.handleChange}>
                      {preferredAccommodation.map((accommodation) => (
                        <option value={accommodation.code} key={accommodation.code}>
                          {accommodation.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="button-hero">
                  <button className="button_contact" onClick={this.handleSubmit}>
                    Send
                  </button>
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
      </div>
    );
  }
}

ContactForm.propTypes = {
  withAccommodation: PropTypes.bool,
};
