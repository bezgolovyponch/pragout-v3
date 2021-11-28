import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {ButtonWrapper, ButtonWrapperMobile, slashMotion} from './Button';

export const StagPack = ({t}) => {
  return (
    <Link href="/stag-do-package">
      <a>
    <div className="package-button-container">
      <div className="text-package-button-container">
        <div>
          <h2 className="stag-pack">{t('GENTLEMEN ESSENTIALS')}</h2>
          <div className="hero-package-description">
            <p className="paragraph-hero-package">
              - {t('Return airport transfer')} <br />
              - {t('Old brewery tour')} <br />
              - {t('Best viewing beer tour')} <br />
            </p>
            <p className="paragraph-hero-package">
              - {t('Steak and strip')} <br />
              - {t('Private pub crawl')} <br />
              - {t('VIP club entrance')} <br />
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
      </a>
    </Link>
  );
};
