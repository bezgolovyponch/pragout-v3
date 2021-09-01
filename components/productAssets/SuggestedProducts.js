import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductRow from '../products/ProductRow';
import {connect} from 'react-redux';

class SuggestedProducts extends Component {
  render() {
    const {products, currentProduct} = this.props;
    const filteredProducts = products.filter((product) => product.id !== currentProduct.id);
    return (
      <div className="d-flex flex-column align-items-center mb-5 pb-4">
        {/*        <p className="font-color-medium mb-4">Suggested products</p>*/}
        {/*<p className="text-center font-size-display1 mt-4 py-4 font-weight-medium" style={{maxWidth: '32rem'}}>
          You may also like to check out these products:
        </p>*/}
        <ProductRow products={[]} />
      </div>
    );
  }
}

SuggestedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  currentProduct: PropTypes.object,
};

SuggestedProducts.defaultProps = {
  products: [],
  currentProduct: {},
};

export default connect((state) => state)(SuggestedProducts);
