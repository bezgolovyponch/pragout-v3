import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import ccFormat from '../../utils/ccFormat';
import Root from '../../components/common/Root';
import ShippingForm from '../../components/checkout/common/ShippingForm';
import Loader from '../../components/checkout/Loader';
import {
  generateCheckoutTokenFromCart as dispatchGenerateCheckout,
  getShippingOptionsForCheckout as dispatchGetShippingOptions,
  setShippingOptionInCheckout as dispatchSetShippingOptionsInCheckout,
  setDiscountCodeInCheckout as dispatchSetDiscountCodeInCheckout,
  captureOrder as dispatchCaptureOrder,
} from '../../store/actions/checkoutActions';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {appendSpreadsheet} from '../../lib/sheets';
import YAML from 'yaml';
/**
 * Render the checkout page
 */
class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // string property names to conveniently identify inputs related to commerce.js validation errors
      // e.g error { param: "shipping[name]"}
      firstName: '',
      lastName: '',
      customerEmail: '',
      'customer[id]': null,
      orderNotes: '',
      phoneNumber: null,

      errors: {
        'fulfillment[shipping_method]': null,
        gateway_error: null,
        'customer[email]': null,
        'shipping[name]': null,
        'shipping[street]': null,
        'shipping[town_city]': null,
        'shipping[postal_zip_code]': null,
      },

      discountCode: 'CUSTOMCOMMERCE',
      loading: false,
    };

    this.captureOrder = this.captureOrder.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleDiscountChange = this.handleDiscountChange.bind(this);
    this.handleCaptureSuccess = this.handleCaptureSuccess.bind(this);
    this.handleCaptureError = this.handleCaptureError.bind(this);
    this.redirectOutOfCheckout = this.redirectOutOfCheckout.bind(this);
  }

  componentDidMount() {
    // if cart is empty then redirect out of checkout;
    if (this.props.cart && this.props.cart.total_items === 0) {
      this.redirectOutOfCheckout();
    }

    this.updateCustomerFromRedux();
    // on initial mount generate checkout token object from the cart,
    // and then subsequently below in componentDidUpdate if the props.cart.total_items has changed
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.customer && !prevProps.customer) {
      this.updateCustomerFromRedux();
    }
  }

  /**
   * Uses the customer provided by redux and updates local state with customer detail (if present)
   */
  updateCustomerFromRedux() {
    // Pull the customer object from prop (provided by redux)
    const {customer} = this.props;

    // Exit early if the customer doesn't exist
    if (!customer) {
      return;
    }

    // Build a some new state to use with "setState" below
    const newState = {
      'customer[email]': customer.email,
      'customer[id]': customer.id,
    };

    if (customer.firstname) {
      newState.firstName = customer.firstname;
    }

    if (customer.lastname) {
      newState.lastName = customer.lastname;
    }

    this.setState(newState);
  }

  redirectOutOfCheckout() {
    this.props.router.push('/');
  }

  handleDiscountChange(e) {
    e.preventDefault();
    if (!this.state.discountCode.trim() || !this.props.checkout) {
      return;
    }

    this.props
      .dispatchSetDiscountCodeInCheckout(this.props.checkout.id, this.state.discountCode)
      .then((resp) => {
        if (resp.valid) {
          return this.setState({
            discountCode: '',
          });
        }
        return Promise.reject(resp);
      })
      .catch((error) => {
        alert('Sorry, the discount code could not be applied');
      });
  }

  handleChangeForm(e) {
    // when input cardNumber changes format using ccFormat helper
    if (e.target.name === 'cardNumber') {
      e.target.value = ccFormat(e.target.value);
    }
    // update form's input by name in state
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /**
   * Handle a successful `checkout.capture()` request
   *
   * @param {object} result
   */
  handleCaptureSuccess(result) {
    this.props.router.push('/checkout/confirm');
  }

  /**
   * Handle an error during a `checkout.capture()` request
   *
   * @param {object} result
   */
  handleCaptureError(result) {
    // Clear the initial loading state
    this.setState({loading: false});

    let errorToAlert = '';

    // If errors are passed as strings, output them immediately
    if (typeof result === 'string') {
      alert(result);
      return;
    }

    const {
      data: {error = {}},
    } = result;

    // Handle any validation errors
    if (error.type === 'validation') {
      console.error('Error while capturing order!', error.message);

      if (typeof error.message === 'string') {
        alert(error.message);
        return;
      }

      error.message.forEach(({param, error}, i) => {
        this.setState({
          errors: {
            ...this.state.errors,
            [param]: error,
          },
        });
      });

      const messageStack = [];
      errorToAlert = messageStack.reduce((string, error) => {
        return `${string} ${error?.error}`;
      }, '');
    }

    // Handle internal errors from the Chec API
    if (['gateway_error', 'not_valid', 'bad_request'].includes(error.type)) {
      this.setState({
        errors: {
          ...this.state.errors,
          [error.type === 'not_valid' ? 'fulfillment[shipping_method]' : error.type]: error.message,
        },
      });
      errorToAlert = error.message;
    }

    // Surface any errors to the customer
    if (errorToAlert) {
      alert(errorToAlert);
    }
  }

  /**
   * Capture the order
   *
   * @param {Event} e
   */
  async captureOrder(e) {
    e.preventDefault();
    const newRow = {
      Name: this.state.firstName + ' ' + this.state.lastName,
      Email: this.state.customerEmail,
      Phone: this.state.phoneNumber,
      ContactNotes: this.state.contactNotes,
      Activities: YAML.stringify(
        this.props.cart.line_items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      ),
    };
    await appendSpreadsheet(newRow);

    this.handleCaptureSuccess(this.props.cart);
    // reset error states
    this.setState({
      errors: {
        'fulfillment[shipping_method]': null,
        gateway_error: null,
        'shipping[name]': null,
        'shipping[street]': null,
      },
    });

    // set up line_items object and inner variant group object for order object below

    const line_items = this.props.cart?.line_items
      ? this.props.checkout.live?.line_items.reduce((obj, lineItem) => {
          const variantGroups = lineItem.selected_options.reduce((obj, option) => {
            obj[option.group_id] = option.option_id;
            return obj;
          }, {});
          obj[lineItem.id] = {...lineItem, variantGroups};
          return obj;
        }, {})
      : {};
    // construct order object
    const newOrder = {
      line_items,
      customer: {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.customerEmail,
        phoneNumber: this.state.phoneNumber,
      },
      // collected 'order notes' data for extra field configured in the Chec Dashboard
      extrafields: this.state.orderNotes,
    };

    // Capture the order
    this.props
      .dispatchCaptureOrder(this.props.checkout.id, newOrder)
      .then(this.handleCaptureSuccess)
      .catch(this.handleCaptureError);
  }

  render() {
    const {checkout, cart} = this.props;
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <Root>
        <Head>
          <title>Checkout</title>
        </Head>

        <div className="custom-container py-5 my-4 my-sm-5">
          {/* Row */}
          <div className="row mt-4">
            <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0">
              {/* Breadcrumbs */}
              {/*<div className="d-flex pb-4 breadcrumb-container">
                <Link href="/activities">
                  <div className="font-size-caption text-decoration-underline cursor-pointer">Cart</div>
                </Link>
                <img src="/icon/arrow-right.svg" className="w-16 mx-1" alt="Arrow icon" />
                <div className="font-size-caption font-weight-bold cursor-pointer">Checkout</div>
              </div>*/}
              {checkout && (
                <form onChange={this.handleChangeForm}>
                  {/* ShippingDetails */}
                  {/*<p className="font-size-subheader font-weight-semibold mb-4">Customer and shipping details</p>*/}
                  <div className="mb-5">
                    <ShippingForm
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      customerEmail={this.state.customerEmail}
                      orderNotes={this.state.orderNotes}
                      phoneNumber={this.state.phoneNumber}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black font-color-white w-100 border-none h-56 font-weight-semibold d-none d-lg-block checkout-btn"
                    disabled={!this.state['customer[email]'] && !this.state.phoneNumber}
                    onClick={this.captureOrder}>
                    Get it started!
                  </button>
                </form>
              )}
            </div>

            <div
              className="col-12 col-lg-5 col-md-10 offset-md-1"
              style={{
                color: 'black',
              }}>
              >
              <div className="bg-brand200 p-5 checkout-summary">
                <div className="borderbottom font-size-subheader border-color-gray400 pb-2 font-weight-medium">
                  Your order
                </div>
                <div className="pt-3 borderbottom border-color-gray400">
                  {(checkout ? cart?.line_items : []).map((item, index, items) => {
                    return (
                      <div key={item.id} className="d-flex mb-2">
                        {item && item.media && (
                          <img
                            className="checkout__line-item-image mr-2"
                            src={item.media.source}
                            alt={item.product_name}
                          />
                        )}
                        <div className="d-flex flex-grow-1">
                          <div className="flex-grow-1">
                            <p className="font-weight-medium">{item.product_name}</p>
                            <p className="font-color-light">Quantity: {item.quantity}</p>
                            <div className="d-flex justify-content-between mb-2">
                              {item.selected_options.map((option) => (
                                <p key={option.group_id} className="font-color-light font-weight-small">
                                  {option.group_name}: {option.option_name}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div className="text-right font-weight-semibold">${item.line_total.formatted_with_code}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/*<form className="row py-3 borderbottom border-color-gray400">
                  <input
                    name="discountCode"
                    onChange={this.handleFormChanges}
                    value={this.state.discountCode}
                    placeholder="Gift card or discount code"
                    className="mr-2 col"
                  />
                  <button
                    className="font-color-white border-none font-weight-medium px-4 col-auto"
                    disabled={!this.props.checkout || undefined}
                    onClick={this.handleDiscountChange}>
                    Apply
                  </button>
                </form>*/}
                <div className="py-3 borderbottom border-color-black">
                  {[
                    ,/*{
                      name: 'Subtotal',
                      amount: checkout.live ? checkout.live.subtotal.formatted_with_symbol : '',
                    }*/
                    /* {
                      name: 'Tax',
                      amount: checkout.live ? checkout.live.tax.amount.formatted_with_symbol : '',
                    },
                    {
                      name: 'Shipping',
                      amount: selectedShippingOption
                        ? `${selectedShippingOption.description} - ${selectedShippingOption.price.formatted_with_symbol}`
                        : 'No shipping method selected',
                    },
                    {
                      name: 'Discount',
                      amount:
                        checkout.live && checkout.live.discount && checkout.live.discount.code
                          ? `Saved ${checkout.live.discount.amount_saved.formatted_with_symbol}`
                          : 'No discount code applied',
                    },*/
                  ].map((item, i) => (
                    <div key={i} className="d-flex justify-content-between align-items-center mb-2">
                      <p>{item.name}</p>
                      <p className="text-right font-weight-medium">{item.amount}</p>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pt-3">
                  <p className="font-size-title font-weight-semibold">Total amount</p>
                  <p className="text-right font-weight-semibold font-size-title">
                    $ {cart.subtotal ? cart.subtotal.formatted_with_code : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Root>
    );
  }
}

CheckoutPage.propTypes = {
  checkout: PropTypes.object,
  cart: PropTypes.object,
  shippingOptions: PropTypes.array,
  dispatchGenerateCheckout: PropTypes.func,
  dispatchGetShippingOptions: PropTypes.func,
  dispatchSetDiscountCodeInCheckout: PropTypes.func,
};

// If using Stripe, this provides context to the page so we can use `stripe` and
// `elements` as props.
const InjectedCheckoutPage = (passProps) => {
  return (
    <Elements stripe={passProps.stripe}>
      <ElementsConsumer>
        {({elements, stripe}) => <CheckoutPage {...passProps} stripe={stripe} elements={elements} />}
      </ElementsConsumer>
    </Elements>
  );
};

export default withRouter(
  connect(
    ({checkout: {checkoutTokenObject, shippingOptions}, cart, customer, orderReceipt}) => ({
      checkout: checkoutTokenObject,
      customer,
      shippingOptions,
      cart,
      orderReceipt,
    }),
    {
      dispatchGenerateCheckout,
      dispatchGetShippingOptions,
      dispatchSetShippingOptionsInCheckout,
      dispatchSetDiscountCodeInCheckout,
      dispatchCaptureOrder,
    },
  )(InjectedCheckoutPage),
);
