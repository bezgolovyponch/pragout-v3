import React, {Component} from 'react';
import commerce from '../../lib/commerce';
import {connect} from 'react-redux';
import Head from 'next/head';
import Root from '../../components/common/Root';
import ProductDetail from '../../components/productAssets/ProductDetail';
import SuggestedProducts from '../../components/productAssets/SuggestedProducts';
import Footer from '../../components/common/Footer';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShipping: false,
      showDetails: false,
    };

    this.toggleShipping = this.toggleShipping.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleShipping() {
    const {showShipping} = this.state;
    this.setState({showShipping: !showShipping});
  }

  toggleDetails() {
    const {showDetails} = this.state;
    this.setState({showDetails: !showDetails});
  }

  render() {
    const {product} = this.props;
    const image = product.media.source;
    return (
      <Root>
        <Head>
          <title>{product.name} | commerce</title>
        </Head>
        <div className="product-section">
          <div className="product-details-image">
            <img className="product-image" src={image} />
          </div>
          <div />
          <ProductDetail product={product} />
        </div>
        <SuggestedProducts currentProduct={product} />
        <Footer />
      </Root>
    );
  }
}

/**
 * Use getStaticPaths() to pre-render PDP (product display page) according to page path
 */
export async function getStaticPaths() {
  const {data: products} = await commerce.products.list({limit: 50});

  // Get the paths we want to pre-render based on product
  const paths = products.map((product) => ({
    params: {
      permalink: product.permalink,
    },
  }));

  // We'll pre-render only these paths at build time.
  return {
    paths,
    // { fallback: false } means other routes should 404.
    fallback: false,
  };
}

// This also gets called at build time, and fetches the product to view
export async function getStaticProps({params: {permalink}}) {
  // params contains the product `permalink`.
  // If the route is like /product/shampoo-conditioner, then params.permalink is shampoo-conditioner
  const product = await commerce.products.retrieve(permalink, {type: 'permalink '});

  // Pass product data to the page via props
  return {
    props: {
      product,
    },
  };
}

export default connect((state) => state)(Product);
