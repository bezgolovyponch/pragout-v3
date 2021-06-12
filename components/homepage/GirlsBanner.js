import React from 'react';
import {motion} from 'framer-motion';
import {ButtonWrapper, ButtonWrapperMobile, slashMotion} from '../common/atoms/Button';

export function GirlsBanner() {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <div className="section-girls">
        <div className="stag-package-girls">
          <div className="text-package-girls-container">
            <p className="top-text-ladies">Ladies , this one is for you!</p>
            <h1 className="text-header">FABULOUS HEN DO PACKAGE</h1>
            <p className="paragraph-text">
              Girls just wanna have fun! And we know it. Let us introduce you to hen do classics. Ladies only!
            </p>
          </div>
          <div className="girls-container">
            <div className="package-button-container">
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
              <motion.div className="benjamin-button" variants={slashMotion}>
                <ButtonWrapper linkTo="/hen-do-package" />
              </motion.div>
              <div className="benjamin-button-mobile">
                <ButtonWrapperMobile linkTo="/hen-do-package" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
