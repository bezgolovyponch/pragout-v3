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
const packageIncludedText =
  ' Folks, here we are! Thats the heart of Europe,the land of vice and beer. Welcome to Prague!.';
const iconText = ' Nice places, loads of beer and food, and best parties!';
const iconText2 = ' All come with a perfect schedule and execution tailored to your needs.';
const iconText3 =
  ' We got you covered from the arrival till departure.  If you will need anything else - we are there for you 24hrs straight.';

const CovidPackage = () => (
  <Root>
    <Head>
      <title>Covid Package</title>
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
      iconText={iconText}
      iconText2={iconText2}
      iconText3={iconText3}
      packageName={packageName}
      packagePrice={packagePrice}
      packageIncludedText={packageIncludedText}
    />
    <ContactForm withAccommodation={true} onMainPage={false} />
    <Footer />
  </Root>
);

export default CovidPackage;
