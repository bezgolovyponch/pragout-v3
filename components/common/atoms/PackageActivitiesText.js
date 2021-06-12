import React from 'react';

const IconText = () => (
  <p className="icon-text">
    We got you covered from the arrival till departure. <br />
    If you will need anyhting else - we are there for you <br />
    24hrs straight.
  </p>
);
export const PackageIncludedActivities = ({activities}) => (
  <div className="package-included-activities">
    {activities?.map((text) => (
      <p className="package-activities">{text}</p>
    ))}
  </div>
);

export const PackageNamePrice = ({packageName, packagePrice}) => (
  <div className="package-name-price">
    <h1 className="package-name">{packageName}</h1>
    <p className="package-text-price">Estimated price per person</p>
    <p className="package-price">{packagePrice}</p>
  </div>
);

export const PackageCard = ({iconUrl, title}) => (
  <div className="package-cards">
    <div className="card-icon">
      <img className="package-icon" src={iconUrl} />
    </div>
    <div className="icon-description">
      <p className="icon-title">{title}</p>
      <IconText />
    </div>
  </div>
);
