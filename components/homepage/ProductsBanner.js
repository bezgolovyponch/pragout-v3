import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProductRow from '../products/ProductRow';
import {connect} from 'react-redux';

class ProductsBanner extends Component {
  render() {
    const {products} = this.props;

    return (
      <div className="section-third">
        <div className="activities-text">
          <div>
            <p className="top-text-section">Check out our most popular activities</p>
            <h1 className="top-text-section-h1">
              HOTTEST CHOICES
              <br />
              THIS SEASON
            </h1>
          </div>
          <div className="div-block-7">
            <Link href="/collection">
              <a className="button-link">Browse all</a>
            </Link>
          </div>
        </div>
        <div className="products-wrapper">
          <ProductRow products={products.slice(0, 4)} />
        </div>
      </div>
    );
  }
}

ProductsBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsBanner.defaultProps = {
  products: [],
};

export default connect((state) => state)(ProductsBanner);
