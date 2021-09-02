import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';

class ShippingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saveInfo: true,
    };
  }

  render() {
    const {firstName, numberOfPersons, customerEmail, orderNotes, phoneNumber, t, handleFormChange} = this.props;

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">{t('Name')}*</p>
              <input name="firstName" value={firstName} onChange={handleFormChange} className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Number of persons</p>
              <input name="numberOfPersons" value={numberOfPersons} onChange={handleFormChange} className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">{t('Phone number')}</p>
              <input className="rounded-0 w-100" name="phoneNumber" onChange={handleFormChange} value={phoneNumber} />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Email*</p>
              <input name="customerEmail" value={customerEmail} onChange={handleFormChange} className="rounded-0 w-100" />
            </label>
          </div>
        </div>

        <label className="w-100 mb-3">
          <p className="mb-1 font-size-caption font-color-light">{t('Order notes')}</p>
          <textarea name="orderNotes" value={orderNotes} onChange={handleFormChange} className="rounded-0 w-100" />
        </label>
      </>
    );
  }
}

ShippingForm.propTypes = {
  firstName: PropTypes.string,
  numberOfPersons: PropTypes.string,
  customerEmail: PropTypes.string,
  orderNotes: PropTypes.string,
  phoneNumber: PropTypes.string,
  handleFormChange: PropTypes.func,
};

export default withTranslation()(ShippingForm);
