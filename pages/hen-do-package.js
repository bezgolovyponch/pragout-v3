import React from 'react';
import Root from '../components/common/Root';
import ContactForm from '../components/checkout/common/ContactForm';
import Footer from '../components/common/Footer';
import Package from '../components/common/Package';
import Head from 'next/head';
const videoUrl =
  'https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6097d7c03d62714be62cc652_Stag BG NO music-transcode.mp4';
const iconUrl1 = '/images/beer-logo1.svg';
const iconUrl2 = '/images/friends.svg';
const iconUrl3 = '/images/ajustable1.svg';
const cardTitle1 = 'Easy peasy';
const cardTitle2 = 'Easy peasy';
const cardTitle3 = 'Easy peasy';
const packageName = 'PRAGOUT STARTER PACK';
const packagePrice = '€180';
const activitiesLeftPartStag = ['· Return airport transfer', '· AK 47 shooting', '· Outdoor paintball'];
const activitiesRightPartStag = ['· Steak and strip', ' · Private pub crawl', ' · VIP club entrance'];

const HenDoPackagePage = () => (
  <Root>
    <Head>
      <title>Hen do package</title>
    </Head>
    <Package
      activitiesLeftPartStag={activitiesLeftPartStag}
      activitiesRightPartStag={activitiesRightPartStag}
      videoUrl={videoUrl}
      iconUrl1={iconUrl1}
      iconUrl2={iconUrl2}
      iconUrl3={iconUrl3}
      cardTitle1={cardTitle1}
      cardTitle2={cardTitle2}
      cardTitle3={cardTitle3}
      packageName={packageName}
      packagePrice={packagePrice}
    />
    <ContactForm withAccommodation={true} />
    <Footer />
  </Root>
);

export default HenDoPackagePage;
