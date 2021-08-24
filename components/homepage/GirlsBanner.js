import React from 'react';
import {motion} from 'framer-motion';
import {
  ButtonWrapperHen,
  ButtonWrapperMobileHen,
  slashMotion,
} from '../common/atoms/Button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function GirlsBanner() {
  const { t } = useTranslation();
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <div className="section-girls">
        <div className="stag-package-girls">
          <div className="text-package-girls-container">
            <p className="top-text-ladies">{t('Ladies , this one is for you!')}</p>
            <h1 className="text-header">{t('FABULOUS GIRLS WEEKEND')}</h1>
            <p className="paragraph-text">
              {t('Girls just wanna have fun! And we know it. Let us introduce you to hen do classics. Ladies only!')}
            </p>
          </div>
          <div className="girls-container">
            <Link href="/hen-do-package">
              <a>
            <div className="package-button-container">
              <div className="text-package-button-container">
                <div>
                  <h2 className="stag-pack">{t('BACHELORETTE ESSENTIALS')}</h2>

                  <div className="hero-package-description">
                    <p className="paragraph-hero-package">
                      {t('- Return airport transfer')} <br />
                      {t('- Champagne limo drive')} <br />
                    </p>
                    <p className="paragraph-hero-package">
                      {t('- Instagram tour')} <br />
                      {t('- VIP club entrance')} <br />
                    </p>
                  </div>
                </div>
              </div>
              <motion.div className="benjamin-button" variants={slashMotion}>
                <ButtonWrapperHen linkTo="/hen-do-package" />
              </motion.div>
              <div className="benjamin-button-mobile">
                <ButtonWrapperMobileHen linkTo="/hen-do-package" />
              </div>
            </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
