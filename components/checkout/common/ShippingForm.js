import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../common/atoms/Checkbox';
import Dropdown from '../../common/atoms/Dropdown';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';

class ShippingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saveInfo: true,
    };
  }

  render() {
    const {firstName, numberOfPersons, customerEmail, orderNotes, phoneNumber, t} = this.props;

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">{t('Name')}*</p>
              <input name="firstName" value={firstName} className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Number of persons</p>
              <input name="numberOfPersons" value={numberOfPersons} className="rounded-0 w-100" />
            </label>
          </div>
          {/* <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Middle name (optional)
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>*/}
        </div>
        {/*<div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Country*</p>
              <Dropdown name="deliveryCountry" placeholder="Select a country" value={deliveryCountry}>
                {Object.entries(countries).map(([code, name]) => (
                  <option value={code} key={code}>
                    {name}
                  </option>
                ))}
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">City*</p>
              <input name="shipping[town_city]" value={shippingTownCity} className="rounded-0 w-100" />
            </label>
          </div>
        </div>*/}
        {/*<div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Address line 1*
              </p>
              <input
                name="shipping[street]"
                value={shippingStreet}
                className="rounded-0 w-100"
                placeholder="House number, steet, etc."
              />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Address line 2 (optional)
              </p>
              <input
                name="street2"
                value={shippingStreet2}
                className="rounded-0 w-100"
                placeholder="Appartment, buero, etc."
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                State/province/region*
              </p>
              <Dropdown
                name="deliveryRegion"
                value={deliveryRegion}
                placeholder="Select a region"
              >
                {
                  Object.entries(subdivisions).map(([code, name]) => (
                    <option key={code} value={code}>
                    { name }
                    </option>
                  ))
                }
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Postal code*
              </p>
              <input
                name="shipping[postal_zip_code]"
                value={shippingPostalZipCode}
                className="rounded-0 w-100"
              />
            </label>
          </div>
        </div>*/}
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">{t('Phone number')}</p>
              <input className="rounded-0 w-100" name="phoneNumber" value={phoneNumber} />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Email*</p>
              <input name="customerEmail" value={customerEmail} className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Shipping method*</p>
              <Dropdown
                name="fulfillment[shipping_method]"
                value={
                  selectedShippingOption
                    ? `${selectedShippingOption.description} - ${selectedShippingOption.price.formatted_with_code}`
                    : ''
                }
                placeholder="Select a shipping method">
                {shippingOptions &&
                  shippingOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {`${option.description} - $${option.price.formatted_with_code}`}
                    </option>
                  ))}
              </Dropdown>
            </label>
          </div>
        </div>*/}
        <label className="w-100 mb-3">
          <p className="mb-1 font-size-caption font-color-light">{t('Order notes')}</p>
          <textarea name="orderNotes" value={orderNotes} className="rounded-0 w-100" />
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
};

export default withTranslation()(ShippingForm);
