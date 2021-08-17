import React from 'react';
import Link from 'next/link';

export const slashMotion = {
  rest: {opacity: 0, ease: 'easeIn', x: '15.1vw'},
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
export const LinkButton = ({text}) => {
  return (
    <div className="button-hero">
      <button className="button_contact">
        <Link href="/corporate-events">
          <a className="button_contact-text">{text}</a>
        </Link>
      </button>
    </div>
  );
};

export const Button = ({text, withIcon, onClick}) => {
  return (
    <div className="button-hero">
      {withIcon && <img className="arrowdown" src="/images/Mainbg_arrow-01.svg" />}
      <button className="button_contact" onClick={onClick}>
        <a className="button_contact-text">{text}</a>
      </button>
    </div>
  );
};

export const ButtonWrapper = ({linkTo}) => {
  return (
    <div className="main-package-price">
      <Link href={linkTo}>
        <a>
          <img className="benjamin-button-image" src="/images/stag2.svg" />
        </a>
      </Link>
    </div>
  );
};

export const ButtonWrapperHen = ({linkTo}) => {
  return (
    <div className="main-package-price">
      <Link href={linkTo}>
        <a>
          <img className="benjamin-button-image" src="/images/hen2.svg" />
        </a>
      </Link>
    </div>
  );
};

export const ButtonWrapperMobile = ({linkTo}) => {
  return (
    <div className="main-package-price-mobile">
      <Link href={linkTo}>
        <a>
          <img className="benjamin-button-image-mobile" src="/images/stag2.svg" />
        </a>
      </Link>
    </div>
  );
};

export const ButtonWrapperMobileHen = ({linkTo}) => {
  return (
    <div className="main-package-price-mobile">
      <Link href={linkTo}>
        <a>
          <img className="benjamin-button-image-mobile" src="/images/hen2.svg" />
        </a>
      </Link>
    </div>
  );
};
