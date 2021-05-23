import React, {Component} from 'react';
import Swiper, {EffectFade, Autoplay} from 'react-id-swiper';
import Link from 'next/link';
import commerce from '../../lib/commerce';
import {Button} from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';
import {LinkButton} from '../common/atoms/Button';
import ContactFormBanner from './ContactFormBanner';
import {ItemPrice} from '../common/atoms/ItemPrice';

const params = {
  modules: [EffectFade, Autoplay],
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};

export default class HeroSection extends Component {
  constructor(props) {
    super(props);

    this.exploreContainer = React.createRef();
    this.image = React.createRef();
    this.image2 = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  animate() {
    if (!this.exploreContainer.current) {
      return;
    }
    const dimensions = this.exploreContainer.current.getBoundingClientRect();
    const x = window.matchMedia('(min-width: 768px)');

    if (x.matches) {
      if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
        const scrolledRatio = (window.innerHeight - dimensions.top) / window.innerHeight - 1;

        // this.image.current.style.transform = `translateY(${-scrolledRatio * 100}px)`;
        // this.image.current.style.transform = `translate3d(0, ${scrolledRatio * 100}px, 0) scale3d(2, 0.7, 0.1)`;
        //this.image2.current.style.transform = `translate3d(0, ${scrolledRatio * 100}px, 0) scale3d(1.2, 1.2, 1)`;
        this.image.current.style.transform = `translate3d(0, ${scrolledRatio * 30}vw, 0)`;
        this.image2.current.style.transform = `translate3d(0, ${-scrolledRatio * 1000}px, 0)`;
      }
    }
  }

  render() {
    return (
      <div ref={this.exploreContainer}>
        <div className="section_bg">
          <div className="div-block-19">
            <img className="image-23" src="/images/GirlLight-01.svg" />
          </div>
          <img className="image-22" src="/images/Mainbg_girl.svg" />
          <img className="mbg_img" src="/images/Mainbg_img-01.jpg" />
          <div className="mainbg_low">
            <img className="mbg_low" src="images/Mainbg_low-01.svg" />
          </div>
          <div className="mainbg_light">
            <div className="mbg_light" />
            {/*<div ref={this.image2} className="explore-girl" />*/}
            <img className="mbg_light" ref={this.image} src="images/Mainbg_light-01.svg" />
          </div>
          <div className="mainbg_mid">
            <img className="mbg_mid" src="/images/Mainbg_mid-01.svg" />
          </div>
          <div className="mainbg_high">
            <img className="mbg_high" ref={this.image2} src="/images/MainBG_high-01.svg" />
          </div>
        </div>
        <div>
          <div className="section_1">
            <div className="main">
              <h5 className="heading_05">MAKE YOUR WEEKEND IN PRAGUE</h5>
              <img className="image-7" src="/images/Title-01.svg" />
              <div className="button-hero">
                <LinkButton className="button_contact" text="Need help?" withIcon={true} linkTo="/contacts" />
              </div>
              <div className="mousescroll">
                <img className="image-8" src="/images/Mouse_Scroll-01.svg" />
                <h1 className="heading-scroll">
                  scroll
                  <br />
                  down
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="section_2">
          <div className="main-stag-package-div">
            <div className="main-stag-package-text">
              <p className="main-package-top-text">Getting married?</p>
              <h1 className="main-package-mid-text">
                PRAGOUT <br /> STAG <br />
                PACK
              </h1>
              <p className="main-package-low-text">
                Plain and simple - we created a pre-made bundle of top-rated activities for you to enjoy. Let true
                proffesionals take care of the rest. Book your tour with a few clicks.
              </p>
            </div>
            <div className="main-package-description">
              <ItemPrice />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
