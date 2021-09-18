import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductRow extends Component {
  render() {
    const {products, t} = this.props;

    return (
      <div className="product-list-item">
        {products.map(({id, permalink, media, name, price}) => (
          <ProductCard
            id={id}
            permalink={permalink}
            image={media.source}
            name={t(name)}
            price={price.formatted_with_symbol}
          />
        ))}
      </div>
    );
  }
}

ProductRow.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductRow.defaultProps = {
  products: [],
};

export default ProductRow;
