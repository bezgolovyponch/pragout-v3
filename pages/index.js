import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import HeroSection from '../components/homepage/HeroSection';
import {GirlsBanner} from '../components/homepage/GirlsBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import CorporateBanner from '../components/homepage/CorporateBanner';
import ContactForm from '../components/checkout/common/ContactForm';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Pragout</title>
    </Head>

    <HeroSection />

    <ProductsBanner />
    <GirlsBanner />
    <CorporateBanner />
    <ContactForm withAccommodation={false} />
    <Footer />
  </Root>
);

export default Home;
