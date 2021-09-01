import React, {Component} from 'react';
import ReviewStars from './ReviewStars';
import VariantSelector from '../productAssets/VariantSelector';
import {animateScroll as scroll} from 'react-scroll';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {withTranslation} from 'react-i18next';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: [],
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleReviewClick = this.handleReviewClick.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  componentDidMount() {
    this.setSelectedOptions();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.product || prevProps.product.id !== this.props.product.id) {
      // Product was changed, reset selected variant group options
      this.setSelectedOptions();
    }
  }

  /**
   * Work out which options should be selected by which variant groups
   */
  setSelectedOptions() {
    this.setState((state, props) => ({
      selectedOptions: {
        // Assign the first option as the selected value for each variant
        ...props.product.variant_groups.reduce(
          (acc, variantGroup) => ({
            ...acc,
            [variantGroup.id]: variantGroup.options[0].id,
          }),
          {},
        ),
      },
    }));
  }

  /**
   * Handle click to scroll to review section
   */
  handleReviewClick() {
    const section = document.querySelector('#reviews');

    if (section) {
      scroll.scrollTo(section.offsetTop - 130, {
        smooth: 'easeInOutQuint',
      });
    }
  }

  /**
   * On selecting variant
   */
  handleSelectOption(variantGroupId, optionId) {
    this.setState({
      selectedOptions: {
        ...this.state.selectedOptions,
        [variantGroupId]: optionId,
      },
    });
  }

  /**
   * Get price of selected option
   */
  getPrice() {
    const {
      price: {raw: base},
      variant_groups: variantGroups,
    } = this.props.product;
    const {selectedOptions} = this.state;

    if (!selectedOptions || typeof selectedOptions !== 'object') {
      return base;
    }

    const options = Object.entries(selectedOptions);
    return (
      base +
      options.reduce((acc, [variantGroup, option]) => {
        const variantDetail = variantGroups.find((candidate) => candidate.id === variantGroup);
        if (!variantDetail) {
          return acc;
        }
        const optionDetail = variantDetail.options.find((candidate) => candidate.id === option);
        if (!optionDetail) {
          return acc;
        }

        return acc + optionDetail.price.raw;
      }, 0)
    );
  }

  /**
   * Get symbol of formatted price
   */
  getCurrencySymbol(priceFormattedWithSymbol) {
    return priceFormattedWithSymbol.substring(1, 0);
  }

  /**
   * Add to Cart
   */
  handleAddToCart() {
    const {product} = this.props;
    const {selectedOptions} = this.state;
    this.props.dispatch(addToCart(product.id, 1, selectedOptions));
  }

  render() {
    const {t} = this.props;
    const PricePerGroup = ['lP4Yq4', 'LnyKbT', '0PnZy6','HcCipn','Ps7kIE','mjAQH4','EisIvh','PB07z0'] ;
    const {name, description, price, variant_groups: variantGroups, extrafields} = this.props.product;
    const priceSymbol = this.getCurrencySymbol(price.formatted_with_symbol);
    const {selectedOptions} = this.state;
    const reg = /(<([^>]+)>)/gi;
    const translated = t(description);
    const anotherOne = t(extrafields.map(({name}) => name));
    const translated2 = description.replace(reg, ' ');
    const translated3 = t('PedalBoatDesc');
    console.log(anotherOne);
    return (
      <div className="product-details">
        {/*        <p className="font-size-display3">{name}</p>*/}
        <h1>{t(name)}</h1>
        <div
          style={{
            whiteSpace: 'pre',
            listStyleType: 'square',
          }}>
          {(anotherOne || '').replace(reg, '\n')}
        </div>

        {/* Product Variant */}
        <div className="d-none d-sm-block">
          <VariantSelector
            className="mb-3"
            variantGroups={variantGroups}
            onSelectOption={this.handleSelectOption}
            selectedOptions={selectedOptions}
          />
        </div>

        {/* Add to Cart & Price */}
        <div className="add-to-cart">
          <button
            onClick={this.handleAddToCart}
            className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center"
            type="button">
            <span className="flex-grow-1 mr-3 text-right font-size-display 2">{t('Add to your plan')}</span>
            <span className="border-left border-color-white pl-3">
              {priceSymbol}
              {this.getPrice()}
            </span>
          </button>
        </div>
        <div className="price-per">
          Price per person in case of 10 people group : Price per group

        </div>
      </div>

    );
  }
}

export default withTranslation()(connect((state) => state)(ProductDetail));
