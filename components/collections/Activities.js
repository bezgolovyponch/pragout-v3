import React, {Component} from 'react';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {STORE_PRODUCTS} from '../../store/actions/actionTypes';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'All',
    };
    this.sidebar = React.createRef();
    this.page = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Changing state
    this.setState({category: 'beer'});
    console.log(this.state);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    console.log(this.state);
  }

  handleScroll() {
    const animate = () => {
      if (!this.page.current) {
        return;
      }

      const distance = this.page.current.getBoundingClientRect().bottom - window.innerHeight;

      if (distance < 0) {
        this.sidebar.current.style.transform = `translateY(${distance}px)`;
      } else {
        this.sidebar.current.style.transform = 'translateY(0px)';
      }
    };

    window.requestAnimationFrame(animate);
  }

  renderSidebar() {
    const {categories} = this.props;
    const sortedCategories = categories.sort((a, b) => a.slug.localeCompare(b.slug));
    return (
      <>
        {sortedCategories.map((category) => (
          <div key={category.id} className="custom-container-item">
            <Link href={`/activities#${category.slug}`}>
              {/*              <a className="category-link" onChange={handleChange}>
                      {category.name}
                    </a>*/}
              <button className="category-link" onClick={this.handleClick}>
                {category.name}
              </button>
            </Link>
          </div>
        ))}
      </>
    );
  }

  /**
   * Filter products by category
   */
  filterProductsByCat(catSlug) {
    const {categories, products} = this.props;

    const cat = categories.find((category) => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    return products.filter((product) => product.categories.find((productCategory) => productCategory.id === cat.id));
  }

  /**
   * Render collections based on categories available in data
   */
  renderCollection() {
    const {products} = this.props;

    return (
      <div className="collection">
        {products.map((product) => (
          <div key={product.id} className="list-item">
            <Link href="/product/[permalink]" as={`/product/${product.permalink}`}>
              <a
                className="item-link"
                style={{
                  background: `url("${product.media.source}")`,
                }}>
                <div className="product-bottom">
                  <div className="product-name-price">
                    <p className="product-link">{product.name}</p>
                    <p className="product-link">{product.price.formatted_with_symbol}</p>{' '}
                  </div>
                  <div className="add-to-cart">+ Add</div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="section-activities">
        <Head>
          <title>Activities</title>
        </Head>
        <div ref={this.sidebar} className="list-wrapper">
          {this.renderSidebar()}
        </div>

        {/* Main Content */}
        <div ref={this.page} className="activities-wrap">
          {this.renderCollection()}
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(Activities);
