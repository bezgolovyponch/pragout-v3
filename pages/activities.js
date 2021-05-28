import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Activities from '../components/collections/Activities';
import SocialMedia from '../components/common/SocialMedia';
import Footer from '../components/common/Footer';

const Home = () => (
  <Root>
    <Head>
      <title>Activities</title>
    </Head>
    <Activities />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
