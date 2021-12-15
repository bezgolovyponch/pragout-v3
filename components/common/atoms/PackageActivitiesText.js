import React from 'react';
import Link from 'next/link';

export const PackageIncludedActivities = ({activities, t}) => (
  <div className="package-included-activities">
    {activities?.map((text) => (
        <a className="package-activities" href={text.href}>{t(text.text)}</a>
    ))}
  </div>
);

export const PackageNamePrice = ({packageName, packagePrice, t}) => (
  <div className="package-name-price">
    <h1 className="package-name">{t(packageName)}</h1>
    {packageName !== 'CORPORATE EVENTS' ? (
    <p className="package-text-price"> {t('Estimated budget per person')} </p>
      ) : ''}
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

