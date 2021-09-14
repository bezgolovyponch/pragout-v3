import React, {useEffect, useState} from 'react';
import commerce from '../../lib/commerce';
import Head from 'next/head';
import Root from '../../components/common/Root';
import ProductDetail from '../../components/productAssets/ProductDetail';
import SuggestedProducts from '../../components/productAssets/SuggestedProducts';
import Footer from '../../components/common/Footer';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import reduceProductImages from '../../utils/reduceProductImages';
import TemplatePage from '../../components/common/TemplatePage';
import {useTranslation} from 'react-i18next';

export default function Product() {
  const router = useRouter();
  const { t } = useTranslation();
  const {permalink} = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!permalink) {
      return;
    }

    const fetchProductByPermalink = async (permalink) => {
      try {
        const product = await commerce.products.retrieve(permalink, {type: 'permalink '});
        setProduct(product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProductByPermalink(permalink);
  }, [permalink]);

  if (loading) {
    return <TemplatePage page={{message: t('Loading')}} />
  }

  if (product === null) {
    return <ErrorPage statusCode={404} />
  }
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
      <SuggestedProducts currentProduct={product} />
      <Footer />
    </Root>
  );
}
