/* global process */
import React, {useEffect, useState} from 'react';
import '../style/scss/style.scss';
import {useStore} from '../store';
import {Provider} from 'react-redux';
import commerce from '../lib/commerce';
import {loadStripe} from '@stripe/stripe-js';
import {setCustomer} from '../store/actions/authenticateActions';
import universalLanguageDetect from '@unly/universal-language-detector';
import NextCookies from 'next-cookies';
export const FALLBACK_LANG = 'en';
export const SUPPORTED_LANGUAGES = ['de', 'en', 'cz'];
const MyApp = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialState);
  const [stripePromise, setStripePromise] = useState(null);
  const lang = universalLanguageDetect({
    supportedLanguages: SUPPORTED_LANGUAGES, // Whitelist of supported languages, will be used to filter out languages that aren't supported
    fallbackLanguage: FALLBACK_LANG, // Fallback language in case the user's language cannot be resolved
    errorHandler: (error, level, origin, context) => {
      // Optional - Use you own logger here, Sentry, etc.
      console.log('Custom error handler:');
      console.error(error);
    },
  });
  //console.log('lang', lang);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      // has API key
      setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));
    }

    setCustomer();

    commerce.products.list({limit: 60}).then((res) => {
      store.dispatch({
        type: 'STORE_PRODUCTS',
        payload: res.data,
      });
    });

    commerce.categories.list().then((res) => {
      console.log(res.data);
      store.dispatch({
        type: 'STORE_CATEGORIES',
        payload: res.data,
      });
    });
  }, [store]);

  return (
    <Provider store={store}>
      <Component {...pageProps} stripe={stripePromise} />
    </Provider>
  );
};

export default MyApp;
