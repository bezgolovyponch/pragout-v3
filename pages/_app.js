/* global process */
import React, {useEffect} from 'react';
import '../style/scss/style.scss';
import {useStore} from '../store';
import {Provider} from 'react-redux';
import commerce from '../lib/commerce';
import '../lib/i18n';
import TagManager from 'react-gtm-module';

function runSerial() {
  let that = this;
  // task1 is a function that returns a promise (and immediately starts executing)
  // task2 is a function that returns a promise (and immediately starts executing)
  return Promise.resolve()
      .then(function() {
          return that.task1();
      })
      .then(function() {
          return that.task2();
      })
      .then(function() {
          console.log(" ---- done ----");
      });
}


const MyApp = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialState);
 const per_page = 8;
 const page = 1;
 const limit = 8;
 const category = 'hottest';
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TQC4X45', events: {
        sendContactForm: 'sendContactForm',
        sendCheckoutForm: 'sendCheckoutForm'
      }});

      commerce.products.list({category_slug: category }).then((res) => {
        dispatch({
          type: 'STORE_PRODUCTS',
          payload: res.data,
        });

        
        commerce.products.list().then((res) => {
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
  }, [store]);

  return (
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
  );
};

export default MyApp;
