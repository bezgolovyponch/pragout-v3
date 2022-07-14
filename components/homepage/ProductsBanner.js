import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProductRow from '../products/ProductRow';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

class ProductsBanner extends Component {
  render() {
    const {products, t} = this.props;
    //const hottestProducts = ['prague-ak47-shooting', 'prague-sight-beer', 'beer-pedal-boat'] ;
    const fileteredProducts = products.filter((product) =>
      product.categories.find((productCategory) => productCategory.slug === 'hottest'),
    );
    const hottestProducts = fileteredProducts.slice(0, 3) ;
    return (
      <div className="section-third">
        <div className="activities-text">
          <div>
            <p className="top-text-section">{t('Check out our most popular things to do in Prague')}</p>
            <h1 className="top-text-section-h1">
              {t('BUILD YOUR')}
              <br />
                {t('OWN PARTY')}
            </h1>
          </div>
          <div className="div-block-7">
            <Link href="/activities">
              <a className="button-link">{t('Check it out!')}</a>
            </Link>
          </div>
        </div>
        <div className="products-wrapper">
          <div className="product-dynamic-list">
            {/* <ProductRow products={products.filter((product) => hottestProducts.includes(product.permalink))} t={t}/> */}
                        <ProductRow products={hottestProducts} t={t}/>
          </div>
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

export default withTranslation()(connect((state) => state)(ProductsBanner));
