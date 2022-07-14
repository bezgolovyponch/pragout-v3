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
          <a href="https://instagram.com/pragout?igshid=YmMyMTA2M2Y=in" className="footer_social_link">
            <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/5fe9ebb6db03c2769e54e9c9_Icon_Inst-01.svg" className="social_link_image" />
          </a>
          <a href="https://www.facebook.com/pragout69" className="footer_social_link">
            <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/5fe9ebb7256d349b21a62d9c_Icon_twitter-01.svg" className="social_link_image" />
          </a>
          <a href="https://www.facebook.com/pragout69" className="footer_social_link">
            <img src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/5fe9ebf8cc48472e9bedafc4_Icon_FB-01.svg" className="social_link_image" />
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
