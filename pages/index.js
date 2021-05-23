import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HeroSection from '../components/homepage/HeroSection';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import CorporateBanner from '../components/homepage/CorporateBanner';
import ContactFormBanner from '../components/homepage/ContactFormBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Pragout</title>
    </Head>

    <HeroSection />

    <ProductsBanner />
    <CategoryBanner />
    {/*    <ExploreBanner />*/}
    {/*    <SocialMedia />*/}
    <CorporateBanner />
    <ContactFormBanner />
    <Footer />
  </Root>
);

export default Home;
