import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Activities from '../components/collections/Activities';
import Footer from '../components/common/Footer';

const Home = () => (
  <Root>
    <Head>
      <title>Activities</title>
        <meta charSet="utf-8"/>
        <meta name="author" content="Pragout Joy"/>
        <meta name="description" content="Make your weekend in Prague."/>
        <meta name="generator" content="Pragout"/>
        <meta className="swiftype" name="meta-description" data-type="text"
              content="Choose any activities you want using our planner."/>
    </Head>
    <Activities />
    <Footer />
  </Root>
);

export default Home;
