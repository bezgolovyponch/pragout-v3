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
        <PackageNamePrice packageName={packageName} packagePrice={packagePrice} />
        <div className="package-included">
          <div className="package-included-columns">
            <PackageIncludedActivities activities={activitiesLeftPartStag} />
            <PackageIncludedActivities activities={activitiesRightPartStag} />
          </div>
          <p className="package-included-text">All you need is here.</p>
        </div>
      </div>
    </div>
    <div className="package-section2">
      <PackageCard iconUrl={iconUrl1} title={cardTitle1} />
      <PackageCard iconUrl={iconUrl2} title={cardTitle2} />
      <PackageCard iconUrl={iconUrl3} title={cardTitle3} />
    </div>
  </div>
);

export default Package;
