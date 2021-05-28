import React from 'react';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ReactPlayer from 'react-player';
import ContactForm from '../components/checkout/common/ContactForm';

const StagDoPackage = () => (
  <Root>
    <div className="stag-do-package-container">
      <div className="video-container">
        <div className="background-video">
          <ReactPlayer
            className="react-player"
            playsInline
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            url="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6097d7c03d62714be62cc652_Stag BG NO music-transcode.mp4"
            autoPlay
            muted
          />
        </div>
      </div>
      <div className="package-section1">
        <div className="package-title">
          <div className="package-name-price">
            <h1 className="package-name">PRAGOUT STARTER PACK</h1>
            <p className="package-text-price">Estimated price per person</p>
            <p className="package-price">€180</p>
          </div>
          <div className="package-included">
            <div className="package-included-columns">
              <div className="package-included-activities">
                <p className="package-activities"> · Return airport transfer</p>
                <p className="package-activities"> · AK 47 shooting</p>
                <p className="package-activities"> · Outdoor paintball</p>
              </div>
              <div className="package-included-activities">
                <p className="package-activities"> · Steak and strip</p>
                <p className="package-activities"> · Private pub crawl</p>
                <p className="package-activities"> · VIP club entrance</p>
              </div>
            </div>
            <p className="package-included-text">All you need is here</p>
          </div>
        </div>
      </div>
      <div className="package-section2">
        <div className="package-cards">
          <div className="card-icon">
            <img className="package-icon" src="/images/beer-logo1.svg" />
          </div>
          <div className="icon-description">
            <p className="icon-title">Easy peasy</p>
            <p className="icon-text">
              We got you covered from the arrival till departure. <br />
              If you will need anyhting else - we are there for you <br />
              24hrs straight.
            </p>
          </div>
        </div>
        <div className="package-cards">
          <div className="card-icon">
            <img className="package-icon" src="/images/friends.svg" />
          </div>
          <div className="icon-description">
            <p className="icon-title">Easy peasy</p>
            <p className="icon-text">
              We got you covered from the arrival till departure. <br />
              If you will need anyhting else - we are there for you <br />
              24hrs straight.
            </p>
          </div>
        </div>
        <div className="package-cards">
          <div className="card-icon">
            <img className="package-icon" src="/images/ajustable1.svg" />
          </div>
          <div className="icon-description">
            <p className="icon-title">Easy peasy</p>
            <p className="icon-text">
              We got you covered from the arrival till departure. <br />
              If you will need anyhting else - we are there for you <br />
              24hrs straight.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ContactForm withAccommodation={true} />
    <Footer />
  </Root>
);

export default StagDoPackage;
