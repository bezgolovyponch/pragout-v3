import React, {Component} from 'react';
import commerce from '../../lib/commerce';
import {connect} from 'react-redux';
import Head from 'next/head';
import Root from '../../components/common/Root';
import ProductDetail from '../../components/productAssets/ProductDetail';
/* import SuggestedProducts from '../../components/productAssets/SuggestedProducts'; */
import Footer from '../../components/common/Footer';
import reduceProductImages from '../../utils/reduceProductImages';
import ContactForm from '../../components/checkout/common/ContactForm';


class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product} = this.props;
    //const image = product.media.source;
    const images = reduceProductImages(product);
    return (
      <Root>
        <Head>
          <title>{product.name}</title>
        </Head>
        <div className="product-section">
          <div className="product-details-image">
            {Array.isArray(images) ? (images.map((image, i) => (
              <img className="product-image" src={image} />
            ))) : (
              ''
            )}
          </div>
          <div />
          <ProductDetail product={product} />
        </div>
     {/*    <SuggestedProducts currentProduct={product} /> */}
        <ContactForm withAccommodation={false} onMainPage={false} />
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
