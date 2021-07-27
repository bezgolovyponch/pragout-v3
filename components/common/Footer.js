import React from 'react';
import Link from 'next/link';
import Cart from '../cart/Cart';
import Animation from '../cart/Animation';

const Footer = () => (
  <footer className="main-footer">
    <Link href="/">
      <a className="logo-footer">
        <img src="/images/Pragout_Logo_1.svg" className="img-footer" />
      </a>
    </Link>
    <div className="navigation">
      <Link href="/activities">
        <a href="/activities" className="footer-link">
          <p className="footer-link-text">Activities</p>
        </a>
      </Link>
      <Link href="/activities">
        <a href="/activities" className="footer-link">
          <p className="footer-link-text">Stag do package</p>
        </a>
      </Link>
      <Link href="/activities">
        <a href="/activities" className="footer-link">
          <p className="footer-link-text">Hen do package</p>
        </a>
      </Link>
      <Link href="/activities">
        <a href="/activities" className="footer-link">
          <p className="footer-link-text">Corporate events</p>
        </a>
      </Link>
    </div>
    <div className="social_links">
      <div className="links_media">
        <div className="social-container">
          <a href="#" className="footer_social_link">
            <img src="images/Icon_Inst-01.svg" className="social_link_image" />
          </a>
          <a href="#" className="footer_social_link">
            <img src="images/Icon_twitter-01.svg" className="social_link_image" />
          </a>
          <a href="#" className="footer_social_link">
            <img src="images/Icon_FB-01.svg" className="social_link_image" />
          </a>
        </div>
      </div>
      <div className="terms-container">
        <a href="/terms-and-conditions" className="footer_terms_link">
          <p className="footer_terms_text">Terms and conditions</p>
        </a>
        <a href="/privacy-policy" className="footer_terms_link">
          <p className="footer_terms_text">Privacy policy</p>
        </a>
        <a href="/contacts" className="footer_terms_link">
          <p className="footer_terms_text">Contacts</p>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
