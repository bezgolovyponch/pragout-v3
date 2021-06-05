import React, {useState} from 'react';
import {motion} from 'framer-motion';

const slashMotion = {
  rest: {opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween'},
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
      translateX: '100%',
    },
  },
};

export const ItemPrice = () => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
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

        <motion.div
          style={{
            position: 'absolute',
            opacity: 0,
            transform: 'translateX(-50%)',
          }}
          variants={slashMotion}>
          <div className="benjamin-button">
            <div className="main-package-price">
              <img className="benjamin-button-image" src="/images/Pack_price-01.svg" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
