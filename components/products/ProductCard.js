import React from 'react';
import Link from 'next/link';
import {addToCart} from '../../store/actions/cartActions';
import {connect} from 'react-redux';

const ProductCard = ({id, permalink, image, name, price, dispatch}) => {
  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId, 1));
  };

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
        <button className="home-add-to-cart" onClick={() => handleAddToCart(id)}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default connect((state) => state)(ProductCard);
