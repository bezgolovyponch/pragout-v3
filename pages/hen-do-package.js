import React from 'react';
import Root from '../components/common/Root';
import ContactForm from '../components/checkout/common/ContactForm';
import Footer from '../components/common/Footer';
import Package from '../components/common/Package';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';
const videoUrl =
  'https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/612667ef85c251e1214d6e7d_Stag BG No Music (838x210) (2)-transcode.mp4';
const iconUrl1 = '/images/champaigne-glass (2).svg';
const iconUrl2 = '/images/girls-group.svg';
const iconUrl3 = '/images/ajustable1.svg';
const cardTitle1 = 'Perfect girls night';
const cardTitle2 = 'Everyone gets satisfied';
const cardTitle3 = 'Fully adjustable';
const packageName = 'PRAGOUT BACHELORETTE ESSSENTIALS';
const packagePrice = '€74';
const activitiesLeftPartStag = ['- Return airport transfer', '- Champagne limo drive '];
const activitiesRightPartStag = [' - Instagram tour', ' - VIP club entrance'];
const packageIncludedText =
  'A fairytale city in the very heart of Europe. It shines during the day and burns bright by night!';
const iconText = ' Nice places, loads of memories, and unique experience!';
const iconText2 = ' All come with a perfect schedule and execution tailored to your needs.';
const iconText3 = ' We got you covered from the arrival till departure, 24hrs straight.';
const iconText4 = ' Simplicity, safety , local tips and tricks - ';
const iconText5 = ' You are provided with!';
const iconText6 = 'We really know the city and we will make you love it! All for the queens!';
const iconText7 = 'Want to change it a bit? More champagne?';
const iconText8 = ' Or literally anything?';
const iconText9 = ' Your tour manager will provide the best solution! We are open to any ideas!';

const HenDoPackagePage = () => {
  const {t} = useTranslation();
  return (
  <Root>
    <Head>
      <title>Girls night out</title>
      <meta charSet="utf-8"/>
      <meta name="author" content="Pragout Joy"/>
      <meta name="description" content="A fairytale city in the very heart of Europe."/>
      <meta name="generator" content="Pragout"/>
      <meta className="swiftype" name="meta-description" data-type="text"
            content="Nice places, loads of memories, and unique experience."/>
    </Head>
    <Package
      t={t}
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

export default HenDoPackagePage;
