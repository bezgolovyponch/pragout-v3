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
export const LinkButton = ({className, linkTo, text, withIcon}) => {
  return (
    <div className="button-hero">
      {withIcon && <img className="arrowdown" src="/images/Mainbg_arrow-01.svg" />}
      <Link href={linkTo || '/checkout'}>
        <a className={className}>{text}</a>
      </Link>
    </div>
  );
};

export const Button = ({text, withIcon, onClick}) => {
  return (
    <div className="button-hero">
      {withIcon && <img className="arrowdown" src="/images/Mainbg_arrow-01.svg" />}
      <button className="button_contact" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export const ButtonWrapper = ({linkTo}) => {
  return (
    <div className="main-package-price">
      <Link href={linkTo}>
        <a>
          <img className="benjamin-button-image" src="/images/Pack_price-01.svg" />
        </a>
      </Link>
    </div>
  );
};
