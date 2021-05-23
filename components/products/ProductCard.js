import React from 'react';
import Link from 'next/link';

export default function ProductCard({permalink, image, name, price}) {
  return (
    <div className="collection-item">
      <div className="product-image-wrap">
        <div className="item-description">
          <Link href="/product/[permalink]" as={`/product/${permalink}`}>
            <a className="div-block-7">
              <img className="product-image" src={image} />
            </a>
          </Link>
          <div className="image-name-sector">
            <div className="mobile-act-main">
              <div className="item-name">{name}</div>
              <div className="item-price">{price}</div>
            </div>
            <div className="add-button"> Add + </div>
          </div>
        </div>
      </div>
    </div>
  );
}
