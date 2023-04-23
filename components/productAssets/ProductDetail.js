import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {withTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

export const pricePerGroupProducts = [
  'beer-pedal-boat',
  'prague-xxl-strip',
  'prague-hummer-limo',
  'beer-bike',
  'jelly-wrestling',
  'prague-midget-hire',
  'hotel-maids',
  'stag-arrest',
  'stag-arrest-xxl',
  'hotel-strip',
];

const ProductDetail = ({product, dispatch, t}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  /**
   * Get symbol of formatted price
   */
  const getCurrencySymbol = (priceFormattedWithSymbol) => {
    return priceFormattedWithSymbol.substring(1, 0);
  };

  /**
   * Add to Cart
   */
  const handleAddToCart = () => {
    dispatch(addToCart(product.id, 1, selectedOptions));
  };

  const {name, price, extrafields, permalink} = product;
  const isPerGroupProduct = pricePerGroupProducts.includes(permalink);
  const priceSymbol = getCurrencySymbol(price.formatted_with_symbol);
  const reg = /(<([^>]+)>)/gi;
  const descriptionTranslated = t(extrafields.map(({name}) => name));

  return (
    <div className="product-details">
      {/* <p className="font-size-display3">{name}</p> */}
      <h1>{t(name)}</h1>
      <div>{(descriptionTranslated || '').replace(reg, '\n')}</div>

      {/* Add to Cart & Price */}
      <div className="add-to-cart">
        <button
          onClick={handleAddToCart}
          className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center"
          type="button">
          <span className="flex-grow-1 mr-3 text-right font-size-display 2">{t('Add to your plan')}</span>
          <span className="border-left border-color-white pl-3">
            {priceSymbol} {price.raw}
          </span>
        </button>
      </div>
      <div className="price-per">
        {isPerGroupProduct ? t('Price per group') : t('Price per person in case of 10 people group')}
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
  product: {},
};

export default withTranslation()(connect((state) => state)(ProductDetail));
