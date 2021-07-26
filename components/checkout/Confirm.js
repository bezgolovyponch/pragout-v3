import React, {Component} from 'react';
import Root from '../../components/common/Root';
import Link from 'next/link';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*    if (!this.props.orderReceipt) {
      this.props.router.push('/');
    }*/
  }

  /**
   * Print the window using the browser's native print functionality, if possible
   */
  handlePrint() {
    if (window && window.print) {
      window.print();
    }
  }

  render() {
    return (
      <Root>
        <div className="pt-5 mt-2 checkout-confirm receipt">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center py-5 px-4 px-sm-5">
            <div className="bg-success700 h-64 w-64 d-flex rounded-circle align-items-center justify-content-center mb-4">
              <img src="/icon/check.svg" className="w-40" alt="" />
            </div>
            <h3 className="text-center font-family-secondary mb-3">Thank you for your purchase!</h3>
            <h4 className="text-center font-size-subheader mb-3">Your order completed successfully</h4>
            <div className="d-flex w-100 justify-content-center flex-column flex-sm-row">
              <Link href="/">
                <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 border bg-white border-color-gray500 font-color-light mb-2 mb-sm-0 mr-sm-2 no-print">
                  Go back home
                </button>
              </Link>
              <Link href="/activities">
                <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 bg-black font-color-white no-print">
                  Continue shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Root>
    );
  }
}

export default withRouter(connect((state) => state)(Confirm));
