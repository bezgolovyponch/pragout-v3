import React from 'react';

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

export const PackageCard = ({iconUrl, title, iconText, iconText2, iconText3}) => {
  return (
    <div className="package-cards">
      <div className="card-icon">
        <img className="package-icon" src={iconUrl} />
      </div>
      <div className="icon-description">
        <p className="icon-title">{title}</p>
        <p className="icon-text">
          {iconText} <br /> {iconText2} <br /> {iconText3}
        </p>
      </div>
    </div>
  );
};
