/* global process */
import React, {useEffect} from 'react';
import '../style/scss/style.scss';
import {useStore} from '../store';
import {Provider} from 'react-redux';
import commerce from '../lib/commerce';
import {setCustomer} from '../store/actions/authenticateActions';
import '../lib/i18n';

const MyApp = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialState);

  useEffect(() => {
    setCustomer();

    commerce.products.list({limit: 50}).then((res) => {
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
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
