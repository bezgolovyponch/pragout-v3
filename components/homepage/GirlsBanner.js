import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {connect} from 'react-redux';
import {ItemPrice} from '../common/atoms/ItemPrice';

export function GirlsBanner() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="section-girls">
      <div className="stag-package-girls">
        <div className="text-package-girls-container">
          <p className="top-text-ladies">Ladies , this one is for you! FABULOUS HEN DO PACKAGE</p>
          <h1 className="text-header">FABULOUS HEN DO PACKAGE</h1>
          <p className="paragraph-text">
            Girls just wanna have fun! And we know it. Let us introduce you to hen do classics. Ladies only!
          </p>
        </div>
        <div className="girls-container">
          <div
            className="package-button-container"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <div className="text-package-button-container">
              <div>
                <h2 className="stag-pack">HEN DO PACKAGE</h2>

                <div className="hero-package-description">
                  <p className="paragraph-hero-package">
                    - BIG DICKS <br />
                    - big dicks <br />
                    - Abig dicks <br />
                  </p>
                  <p className="paragraph-hero-package">
                    - big dicks <br />
                    - big dicks <br />
                    - big dicks <br />
                  </p>
                </div>
              </div>
            </div>
            {isShown && (
              <div className="benjamin-button">
                <div className="main-package-price">
                  <img className="benjamin-button-image" src="/images/Pack_price-01.svg" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
