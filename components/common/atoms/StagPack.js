import React from 'react';
import {motion} from 'framer-motion';
import {ButtonWrapper, slashMotion} from './Button';
import {useMediaQuery} from 'react-responsive';

export const StagPack = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  return (
    <div className="package-button-container">
      <div className="text-package-button-container">
        <div>
          <h2 className="stag-pack">PRAGOUT STAG PACK</h2>
          <div className="hero-package-description">
            <p className="paragraph-hero-package">
              - Apartments <br />
              - Transfer <br />
              - AK47 Shooting <br />
            </p>
            <p className="paragraph-hero-package">
              - Paintball Outdoor <br />
              - Pragout Night Crawl <br />
              - Local Guide <br />
            </p>
          </div>
        </div>
      </div>
      {!isTabletOrMobileDevice && (
        <motion.div className="benjamin-button" variants={slashMotion}>
          <ButtonWrapper linkTo="/stag-do-package" />
        </motion.div>
      )}
      {isTabletOrMobileDevice && (
        <div className="benjamin-button">
          <ButtonWrapper linkTo="/stag-do-package" />
        </div>
      )}
    </div>
  );
};
