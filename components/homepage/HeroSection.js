import React, {Component} from 'react';
import {StagPack} from '../common/atoms/StagPack';
import {motion} from 'framer-motion';
import {withTranslation} from 'react-i18next';
const duration = 200;

const defaultStyle = {
  //transition: `transform ${duration}ms ease-out`,
  //transition: `transform ${duration}ms ease-in-out`,
  // transition: `transform ${duration}ms ease`,
  transition: 'all 0.5s ease-out',
};

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.exploreContainer = React.createRef();
    this.image = React.createRef();
    this.image2 = React.createRef();
    this.image3 = React.createRef();
    this.imageLow = React.createRef();
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
  handleClick = () => {
    document.getElementById('contactForm').scrollIntoView({behavior: 'smooth'});
  };

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
        const percentage = Math.round((window.innerHeight - dimensions.top) / window.innerHeight);
        const percentage2 = (window.innerHeight - dimensions.top) / window.innerHeight;
        this.image.current.style.transform = `translate3d(0, ${scrolledRatio * 50}vw, 0) scale3d(1.02439, 1.02439, 1)`;
        this.imageLow.current.style.transform = `translate3d(0, ${scrolledRatio * 50}vw, 0) scale3d(${
          percentage2 * 1.2
        },${percentage2 * 1.2}, 1)`;
        /*        if (percentage2 > 1) {
          this.image2.current.style.transform = `translate3d(0, ${
            -scrolledRatio * 1.5
          }vw, 0) scale3d( ${percentage2}, ${percentage2}, 1)`;
          this.image3.current.style.transform = `translate3d(0, ${
            -scrolledRatio * 1.3
          }vw, 0) scale3d(${percentage2},${percentage2}, 1)`;
        }*/
      }
    }
  }

  render() {
    const {t} = this.props;
    return (
      <div ref={this.exploreContainer}>
        <div className="section_bg">
          <div className="div-block-19">
            <img
              className="image-23"
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/603665996a08397167c90568_GirlLight-01.svg"
            />
          </div>
          <img
            className="image-22"
            src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/6036635cf4add3878d523acb_Mainbg_girl.svg"
          />
          <img
            className="mbg_img"
            src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602d531b8c10e7da93046b58_Mainbg_img-01.jpg"
          />
          <div
            className="mainbg_low"
            style={{
              ...defaultStyle,
            }}>
            <img
              className="mbg_low"
              ref={this.imageLow}
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602d538633575e4012e40681_Mainbg_low-01.svg"
            />
          </div>
          <div className="mainbg_light">
            <div className="mbg_light" />
            <img
              className="mbg_light"
              ref={this.image}
              style={{
                ...defaultStyle,
              }}
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602d53867ad04e8d2dac1aeb_Mainbg_light-01.svg"
            />
          </div>
          <div
            className="mainbg_mid"
            style={{
              ...defaultStyle,
            }}>
            <img
              className="mbg_mid"
              ref={this.image3}
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602d5386be64ee1beb5cdcfe_Mainbg_mid-01.svg"
            />
            <img
              className="mbg_mid-mob"
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602ef6ed74f2e556a7487a3c_Mainbg_mid_mob.svg"
            />
          </div>
          <div
            className="mainbg_high"
            style={{
              ...defaultStyle,
            }}>
            <img
              className="mbg_high"
              ref={this.image2}
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602d5386f72a9602e7c27c0e_Mainbg_high-01.svg"
            />
            <img
              className="mbg_high-mob"
              src="https://uploads-ssl.webflow.com/5ecbc94a1fd6e39a650b0933/602ef6ec9587252cde78c83b_MainBG_high_mob.svg"
            />
          </div>
        </div>
        <div>
          <div className="section_1">
            <div className="main">
              {/*<h5 className="heading_05">{t('MAKE YOUR WEEKEND IN PRAGUE')}</h5>*/}
              <h1 className="heading-main">
                {t('EPIC')}
                <br />
                {t('WEEKEND')}
                <br />
                {t('OF FREEDOM IN PRAGUE')}
              </h1>
              <h5 className="heading_05">
                {t('Pragout is specialist in bachelor, bachelorette, birthday')}
                <br />
                {t('retirement, divorce, and private party events')}
              </h5>
              {/*<div className="button-hero">
                <Button className="button_contact" onClick={this.handleClick} text={t('Quick inquiry')} withIcon={true} />
              </div>*/}

              {/*<div className="mousescroll">
                <h5 className="scroll">
                  {t('scroll down')}
                  <br />
                  {t('to have fun')}

                </h5>
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
                <img className="image-8" src="/images/Mouse_Scroll-01.svg" />
                <h1 className="heading-scroll">
                  {t('scroll')}
                  <br />
                    {t('down')}
                </h1>
                <p className="scroll-text">scroll down to have fun</p>
              </div>*/}
            </div>
          </div>
        </div>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <div className="section_2">
            <div className="main-stag-package-div">
              <div className="main-stag-package-text">
                <p className="main-package-top-text">{t('Make planning easier with the')}</p>
                <h1 className="main-package-mid-text">{t('BACHELOR PARTY ESSENTIALS')}</h1>
                <p className="main-package-low-text">
                  {t('Cool and complete - we created a pre-made bundle of top-rated activities in Prague for you to enjoy. Let true professionals who know what to do take care of the rest. Book your tour with a few clicks.')}
                </p>
              </div>

              <div className="main-package-description">
                <StagPack t={t}/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default withTranslation()(HeroSection);
//<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
