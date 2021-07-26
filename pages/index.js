import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import HeroSection from '../components/homepage/HeroSection';
import {GirlsBanner} from '../components/homepage/GirlsBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import CorporateBanner from '../components/homepage/CorporateBanner';
import ContactForm from '../components/checkout/common/ContactForm';
import '../lib/i18n';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Pragout</title>
    </Head>

    <HeroSection />

    <ProductsBanner />
    <GirlsBanner />
    <CorporateBanner />
    <ContactForm withAccommodation={false} onMainPage={true} />
    <Footer />
  </Root>
);

export default Home;
