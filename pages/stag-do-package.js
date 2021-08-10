import React from 'react';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ContactForm from '../components/checkout/common/ContactForm';
import Package from '../components/common/Package';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';
const videoUrl =
  'https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/60ed7f9bc2dd7951eb91d4e6_Stag BG No Music (838x210)-transcode.mp4';
const iconUrl1 = '/images/beer-logo1.svg';
const iconUrl2 = '/images/friends.svg';
const iconUrl3 = '/images/ajustable1.svg';
const cardTitle1 = 'Easy peasy';
const cardTitle2 = 'Everyone gets satisfied';
const cardTitle3 = 'Fully adjustable';
const packageName = 'PRAGOUT GENTLEMEN ESSENTIALS';
const packagePrice = '€149';
const activitiesLeftPartStag = ['· Return airport transfer', '· AK 47 shooting', '· Outdoor paintball'];
const activitiesRightPartStag = ['· Steak and strip', ' · Private pub crawl', ' · VIP club entrance'];
const packageIncludedText =
  'Boys, here we are! Thats the heart of Europe,the land of vice and beer. Welcome to Prague!';
const iconText = 'Nice places, loads of beer and food, and best parties!.';
const iconText2 = ' All come with a perfect schedule and execution tailored to your needs.';
const iconText3 = 'We got you covered from the arrival till departure, 24hrs straight.';
const iconText4 = ' Simplicity, safety , local tips and tricks - ';
const iconText5 = ' You are provided with!';
const iconText6 = 'We really know the city at its best and we will make you love it!';
const iconText7 = 'Want to change it a bit? More beer, less walk?';
const iconText8 = ' Or literally anything?';
const iconText9 = ' Your tour manager will provide the best solution! We are open to any ideas!';

const StagDoPackagePage = () => {
const {t} = useTranslation();
return (
  <Root>
    <Head>
      <title>Stag do package</title>
      <meta charSet="utf-8"/>
      <meta name="author" content="Pragout Joy"/>
      <meta name="description" content="PRAGOUT GENTLEMEN ESSENTIALS"/>
      <meta name="generator" content="Pragout"/>
      <meta className="swiftype" name="meta-description" data-type="text"
            content="Best places and best parties! All come with a flexible schedule and service tailored to your needs."/>
    </Head>
    <Package
      activitiesLeftPartStag={activitiesLeftPartStag}
      activitiesRightPartStag={activitiesRightPartStag}
      videoUrl={videoUrl}
      iconUrl1={iconUrl1}
      iconUrl2={iconUrl2}
      iconUrl3={iconUrl3}
      cardTitle1={t(cardTitle1)}
      cardTitle2={t(cardTitle2)}
      cardTitle3={t(cardTitle3)}
      iconText={t(iconText)}
      iconText2={t(iconText2)}
      iconText3={t(iconText3)}
      iconText4={t(iconText4)}
      iconText5={t(iconText5)}
      iconText6={t(iconText6)}
      iconText7={t(iconText7)}
      iconText8={t(iconText8)}
      iconText9={t(iconText9)}
      packageName={t(packageName)}
      packagePrice={packagePrice}
      packageIncludedText={t(packageIncludedText)}
    />
    <ContactForm withAccommodation={true} onMainPage={false} />
    <Footer />
  </Root>
)
};

export default StagDoPackagePage;
