import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Facebook from '../components/common/Facebook';
import HeroSection from '../components/homepage/HeroSection';
import {GirlsBanner} from '../components/homepage/GirlsBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import CorporateBanner from '../components/homepage/CorporateBanner';
import ContactForm from '../components/checkout/common/ContactForm';


const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Pragout</title>
      <meta charSet="utf-8"/>
        <meta name="author" content="Pragout Joy"/>
          <meta name="description" content="Your best weekend in Prague."/>
            <meta name="generator" content="Pragout"/>
              <meta className="swiftype" name="meta-description" data-type="text"
                    content="Plain and simple — we created a pre-made bundle of top-rated activities for you to enjoy. Lay on experience of true experts of entertainment industry. Book your tour with a few clicks and we take care on the rest."/>
    </Head>
    <HeroSection />
    <Facebook/>
    <ProductsBanner />
    <GirlsBanner />
    <CorporateBanner />
    <ContactForm withAccommodation={false} onMainPage={false} />
    <Footer />
  </Root>
);

export default Home;
