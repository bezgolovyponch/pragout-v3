import React from 'react';
import ReactPlayer from 'react-player';
import {PackageCard, PackageIncludedActivities, PackageNamePrice} from './atoms/PackageActivitiesText';

export const Package = ({
  activitiesLeftPartStag,
  activitiesRightPartStag,
  videoUrl,
  iconUrl1,
  iconUrl2,
  iconUrl3,
  cardTitle1,
  cardTitle2,
  cardTitle3,
  packageName,
  packagePrice,
  packageIncludedText,
  iconText,
  iconText2,
  iconText3,
  iconText4,
  iconText5,
  iconText6,
  iconText7,
  iconText8,
  iconText9,
  t
}) => (
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
          url={videoUrl}
          autoPlay
          muted
        />
      </div>
    </div>
    <div className="package-section1">
      <div className="package-title">
        <PackageNamePrice t={t} packageName={packageName} packagePrice={packagePrice} />
        <div className="package-included">
          <div className="package-included-columns">
            <PackageIncludedActivities t={t} activities={activitiesLeftPartStag} />
            <PackageIncludedActivities t={t} activities={activitiesRightPartStag} />
          </div>
          <p className="package-included-text">{packageIncludedText}</p>
        </div>
      </div>
    </div>
    <div className="divider-package">
      <p className="divider-text">Why go with us?</p>
    </div>
    <div className="package-section2">
      <PackageCard
        iconUrl={iconUrl1}
        title={cardTitle1}
        iconText={iconText}
        iconText2={iconText2}
        iconText3={iconText3}
      />
      <PackageCard
        iconUrl={iconUrl2}
        title={cardTitle2}
        iconText={iconText4}
        iconText2={iconText5}
        iconText3={iconText6}
      />
      <PackageCard
        iconUrl={iconUrl3}
        title={cardTitle3}
        iconText={iconText7}
        iconText2={iconText8}
        iconText3={iconText9}
      />
    </div>
  </div>
);

export default Package;
