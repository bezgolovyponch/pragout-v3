import React, {Component} from 'react';
import Link from 'next/link';
import Cart from '../cart/Cart';
import commerce from '../../lib/commerce';
import {Transition} from 'react-transition-group';
import {connect} from 'react-redux';
import {clearCustomer} from '../../store/actions/authenticateActions';
import LanguageButton from './atoms/LanguageButton';
import {withTranslation} from 'react-i18next';


const duration = 700;

const defaultStyle = {
  zIndex: '-1',
  transition: `height ${duration}ms ease-in-out`,
  height: 0,
};

const transitionStyles = {
  entering: {height: '100vh'},
  entered: {height: '100vh'},
  exiting: {height: 0},
  exited: {height: 0},
};

const mobileMenuLinks = [
  {
    name: 'Activities',
    link: '/activities',
  },
  {
    name: 'Stag do package',
    link: '/stag-do-package',
  },
  {
    name: 'Hen do package',
    link: '/hen-do-package',
  },
  {
    name: 'Corporate events',
    link: '/corporate-events',
  },

];

export const CovidPopUp = () => {
  return (
    <Link href="/covid-package">
      <a href="/covid-package" className="navbar_link2">
        <p>COVID-19 PACKAGE!!!!</p>
      </a>
    </Link>
  );
};
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false,
      showCart: false,
      playAddToCartAnimation: false,
      loggedIn: false,
    };

    this.header = React.createRef();

    this.animate = this.animate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleAddToCartAnimation = this.toggleAddToCartAnimation.bind(this);
    this.handleAddToCartToggle = this.handleAddToCartToggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('Commercejs.Cart.Item.Added', this.handleAddToCartToggle);

    this.setState({
      loggedIn: commerce.customer.isLoggedIn(),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('Commercejs.Cart.Item.Added', this.handleAddToCartToggle);
  }

  toggleCart() {
    const {showCart} = this.state;
    this.setState({
      showCart: !showCart,
    });
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  handleLogout() {
    this.props.clearCustomer();
    this.setState({
      loggedIn: false,
    });
  }

  animate() {
    const {transparent} = this.props;

    if (!transparent) {

    }
  }

  toggleMobileMenu() {
    const {showMobileMenu} = this.state;
    this.setState({showMobileMenu: !showMobileMenu});

    if (!showMobileMenu) {
      //this.header.current.classList.add('invert');
    } else {
      this.animate();
    }
  }

  /**
   * Toggle add to cart animation to true
   */
  toggleAddToCartAnimation() {
    /*    const {playAddToCartAnimation} = this.state;

    this.setState({playAddToCartAnimation: !playAddToCartAnimation});*/
  }

  /**
   * Call toggle of add to cart animation and set time out to false
   */
  handleAddToCartToggle() {
    this.setState({
      showCart: true,
    });
    //this.toggleAddToCartAnimation();
    /*    setTimeout(() => {
      this.toggleAddToCartAnimation();
    }, 3000);*/
  }

  render() {
    const {showMobileMenu, showCart} = this.state;
    const {t} = this.props;

    return (
      <>
        <header className="navbar_div1">
          <div className="navbar-logo1">
            <Link href="/">
              <a>
                <img src="/images/Pragout_Logo_1.svg" className="navbar-logo-img1" alt="Logo" />
              </a>
            </Link>
          </div>
          <div className="navbar_menu2">
            <Link href="/activities">
              <a href="/activities" className="navbar_link2">
                <p className="paragraph_nav2">{t('Activities')}</p>
              </a>
            </Link>
            <Link href="/stag-do-package">
              <a href="/stag-do-package" className="navbar_link2">
                <p className="paragraph_nav2"> {t('Stag do package')}</p>
              </a>
            </Link>
            <Link href="/hen-do-package">
              <a href="/hen-do-package" className="navbar_link2">
                <p className="paragraph_nav2">{t('Hen do package')}</p>
              </a>
            </Link>
            <Link href="/corporate-events">
              <a href="/corporate-events" className="navbar_link2">
                <p className="paragraph_nav2">{t('Corporate events')}</p>
              </a>
            </Link>
          </div>

          <button className="planner_01_button" onClick={this.toggleCart}>
            PLANNER
          </button>
          <Cart isOpen={showCart} toggle={(value) => this.toggleCart(value)} />
          <LanguageButton />
          {/*  <div className="position-relative cursor-pointer" onClick={this.toggleCart}>
            <Animation isStopped={this.state.playAddToCartAnimation} />
          </div>*/}
          {/*          <div className="planner_01_button">
            {process.browser && this.renderLoginLogout()}
            PLANNER
            <Cart isOpen={showCart} toggle={(value) => this.toggleCart(value)} />
            <div className="position-relative cursor-pointer" onClick={this.toggleCart}>
              <Animation isStopped={this.state.playAddToCartAnimation} />
            </div>
          </div>*/}
          <div className="logo-container">
            <img
              src={`/icon/${showMobileMenu ? 'cross' : 'menu'}.svg`}
              onClick={this.toggleMobileMenu}
              className="w-32 mr-1 d-block d-sm-none"
              alt="Menu icon"
            />
          </div>

          {/* Mobile Menu */}
          <Transition in={showMobileMenu} timeout={duration}>
            {(state) => (
              <div
                className="d-sm-none position-fixed left-0 right-0 overflow-hidden z-index-999999"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                  // Prevent gap being shown at bottom of mobile menu
                  top: '0',
                }}>
                <div
                  className="position-absolute left-0 right-0 h-100vh mobile-menu-inner bg-black700 d-flex flex-column justify-content-center"
                  style={{
                    // Prevent mobile menu items (e.g. Home) being hidden behind navbar on small screen heights (e.g. iPhone4 landscape of 320px height)
                    top: '0',
                  }}>
                  {mobileMenuLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      className="d-block mb-4 font-size-heading font-color-white text-right mr-4 pb-3 border-bottom border-color-black600 ml-4">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </Transition>
        </header>
      </>
    );
  }
}

export default withTranslation()(connect((state) => state, {clearCustomer})(Header));
