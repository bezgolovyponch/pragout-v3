import React from 'react';
import {motion} from 'framer-motion';
import {ButtonWrapper, ButtonWrapperMobile, slashMotion} from './Button';

export const StagPack = () => {
  return (
    <div className="package-button-container">
      <div className="text-package-button-container">
        <div>
          <h2 className="stag-pack">GENTLEMEN ESSENTIALS</h2>
          <div className="hero-package-description">
            <p className="paragraph-hero-package">
              - Return airport transfer <br />
              - Outdoor paintball <br />
              - AK 47 shooting <br />
            </p>
            <p className="paragraph-hero-package">
              - Steak and strip <br />
              - Private pub crawl <br />
              - VIP club entrance <br />
            </p>
          </div>
        </div>
      </div>
      <motion.div className="benjamin-button" variants={slashMotion}>
        <ButtonWrapper linkTo="/stag-do-package" />
      </motion.div>
      <div className="benjamin-button-mobile">
        <ButtonWrapperMobile linkTo="/stag-do-package" />
      </div>
    </div>
  );
};
