import React, {Component} from 'react';
import Link from 'next/link';
import {addToCart} from '../../store/actions/cartActions';
import {connect} from 'react-redux';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  /**
   * Add to Cart
   */
  handleAddToCart(productId) {
    this.props.dispatch(addToCart(productId, 1));
  }

  render() {
    const {id, permalink, image, name, price} = this.props;

    return (
      <div key={id} className="list-item">
        <Link href="/product/[permalink]" as={`/product/${permalink}`}>
          <a
            className="home-item-link"
            style={{
              background: `url("${image}") center center/cover`,
            }}
          />
        </Link>
        <div className="product-bottom">
          <div className="product-name-price">
            <p className="product-link">{name}</p>
            <p className="product-link-price">{price}</p>
          </div>
          <button className="home-add-to-cart" onClick={() => this.handleAddToCart(id)}>
            + Add
          </button>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(ProductCard);
