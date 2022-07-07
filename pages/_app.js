/* global process */
import React, {useEffect} from 'react';
import '../style/scss/style.scss';
import {useStore} from '../store';
import {Provider} from 'react-redux';
import commerce from '../lib/commerce';
import '../lib/i18n';
import TagManager from 'react-gtm-module';

const MyApp = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialState);
  const category = 'hottest';
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TQC4X45', events: {
        sendContactForm: 'sendContactForm',
        sendCheckoutForm: 'sendCheckoutForm'
      }});

      commerce.products.list({category_slug: category }).then((res) => {
        store.dispatch({
          type: 'STORE_PRODUCTS',
          payload: res.data,
        });
      });
    
    commerce.categories.list().then((res) => {
      store.dispatch({
        type: 'STORE_CATEGORIES',
        payload: res.data,
      });
    });
     
    commerce.products.list({limit: 50}).then((res) => {
      store.dispatch({
        type: 'STORE_PRODUCTS',
        payload: res.data,
      });
    });

  }, [store]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;