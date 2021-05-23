import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {connect} from 'react-redux';

class CategoryBanner extends Component {
  render() {
    const {categories} = this.props;

    return (
      <div className="section-girls">
        <div className="stag-package-girls">
          <div className="text-package-girls-container">
            <p className="top-text-ladies">Ladies , this one is for you! FABULOUS HEN DO PACKAGE</p>
            <h1 className="text-header">FABULOUS HEN DO PACKAGE</h1>
            <p className="paragraph-text">
              Girls just wanna have fun! And we know it. Let us introduce you to hen do classics. Ladies only!
            </p>
            <div className="girls-container">
              <div className="package-button-container"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryBanner.defaultProps = {
  categories: [],
};

export default connect((state) => state)(CategoryBanner);
