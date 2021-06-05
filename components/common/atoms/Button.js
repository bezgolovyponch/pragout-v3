import React from 'react';
import Link from 'next/link';

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
