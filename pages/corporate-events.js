import React from 'react';
import Root from '../components/common/Root';
import ContactForm from '../components/checkout/common/ContactForm';
import Footer from '../components/common/Footer';
import Package from '../components/common/Package';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';
const videoUrl =
  'https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/612667ef85c251e1214d6e7d_Stag BG No Music (838x210) (2)-transcode.mp4';
const iconUrl1 = '/images/shake-hands.svg';
const iconUrl2 = '/images/friends.svg';
const iconUrl3 = '/images/ajustable1.svg';
const cardTitle1 = 'Local professionals';
const cardTitle2 = 'All in one';
const cardTitle3 = 'We are very flexible';
const packageName = 'CORPORATE EVENTS';
const activitiesLeftPartStag = ['· Seminars and Conferences', '· Trade Shows', '· Appreciation Events'];
const activitiesRightPartStag = ['· Team-Building Events', ' · Product Launch Events', ' · Conferences and even more'];
const packageIncludedText =
  ' We are providing high-quality service from team building to full-scale presentations and conferences.';
const iconText = ' We know - every event is unique and special! ';
const iconText2 = ' We manage it with a perfect schedule and execution tailored to your needs.';
const iconText3 =
  ' We got you covered from the arrival till departure.  If you will need anything else - we are there for you 24hrs straight.';
const iconText4 =
  'Pragout team collaborates with stakeholders and vendors, working to create meaningful opportunities for attendee engagement and interaction. ';
//const iconText5 = ' You are provided with!';
//const iconText6 = 'We really know the city at its best and we will make you love it!  ';
const iconText7 = ' We are ready to adjust to all your company needs and ';
const iconText8 = ' Or literally anything?';
const iconText9 = ' We are exceeding expectations. Guaranteed!';

const CorporateEvents = () => {
const {t} = useTranslation();
return (
  <Root>
    <Head>
        <title>Corporate Events</title>
        <meta charSet="utf-8"/>
        <meta name="author" content="Pragout Joy"/>
        <meta name="description" content="High-quality service from team building to full-scale presentations and conferences."/>
        <meta name="generator" content="Pragout"/>
        <meta className="swiftype" name="meta-description" data-type="text"
              content="Pragout team collaborates with stakeholders and vendors, working to create meaningful opportunities for attendee engagement and interaction."/>
      </Head>
    <Package
      t={t}
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
      iconText4={iconText4}
      //iconText5={iconText5}
      //iconText6={iconText6}
      iconText7={iconText7}
      iconText8={iconText8}
      iconText9={iconText9}
      packageName={packageName}
      packagePrice={''}
      packageIncludedText={packageIncludedText}
    />
    <ContactForm withAccommodation={true} onMainPage={false} />
    <Footer />
  </Root>
)};


export default CorporateEvents;
